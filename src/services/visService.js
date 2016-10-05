import $ from 'jquery'
const d3 = require('d3') //Having trouble importing this

// Element Names
const DIV = 'DIV',
      BODY = 'BODY'

// Colors
const backgroundColor = "#FFF",
      anonymousBorderColor = "#ffcf40",
      fillColorList = d3.scale.category10().range(),
      fillColorListLength = fillColorList.length

//Helper methods
let nid = 1
export const getUniqueId = (xml) => (
  xml.nodeName ? xml.nodeName + nid++ : nid++
)

export const xmlToJson = xml => {
  const $xml = $(xml)
  let obj = {
    uniqueId: getUniqueId(xml),
    name: xml.nodeName,
    type: xml.nodeType,
    ref: xml,
    width: $xml.width(),
    height: $xml.height(),
    hidden: !$xml.is(":visible") || xml.nodeName === 'BODY'
  }

  // Add children
  if (xml.hasChildNodes()) {
    obj.children = []
    const childNodes = xml.childNodes
    const childNum = childNodes.length
    for(let i = 0; i < childNum; i++) {
      const item = childNodes.item(i)

      //Exclude elements in visualization to prevent run away growth
      if (item.nodeType === 1 && !$(item).hasClass('visNode')) {
        obj.children.push(xmlToJson(item))
      }
    }
  }

  return obj
}

const stringToNumber = (str='') => {
  let outputNum = 0
  for (let i = 0; i < str.length; i++) {
    outputNum += str.charCodeAt(i)
  }

  return outputNum
}


const fillColor = domain => {
  return fillColorList[domain % fillColorListLength]
}

export const getFillColor = ({ name }) => {
  switch (name) {
    case DIV:
      return backgroundColor
    default:
      return fillColor(stringToNumber(name) * 0.5)
  }
}

export const getBorderColor = d => {
  switch (d.name) {
    case DIV:
      return anonymousBorderColor
    default:
      return getFillColor(d)
  }
}

export const getOpacity = ({ name, hidden }) => {
  if (hidden) {
    return 0
  }
  switch (name) {
    case BODY:
      return 0
    case DIV:
      return 1
    default:
      return 0.5
  }
}

export const getClass = ({ children, hidden }) => {
  let className = children && children.length ? "parent" : "child"

  if (hidden) {
    className += " hidden"
  }

  className += " visNode"

  return className
}


//Mouse event counters
export const mousoverCounter = ({ target }) => {
  if (target) {
    const hoverCount = $(target).data('hovercount') || 1
    
    $(target).data('hovercount', (hoverCount + 1))
    
  }
}

export const clickCounter = ({ target }) => {
  if (target) {
    const $target = $(target)
    const clickCount = $target.data('clickcount') || 1

    $target.data('clickcount', (clickCount + 1))
  }
}