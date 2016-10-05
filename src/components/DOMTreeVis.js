import React, { Component, PropTypes } from 'react'
import $ from 'jquery'
const d3 = require('d3') //Having trouble importing this
const d3Tip = require('d3-tip')
d3.tip = d3Tip
import { 
  getFillColor,
  getBorderColor,
  getOpacity,
  getClass,
  mousoverCounter,
  clickCounter
} from '../services/visService'

// Vis layout globals
let pack,
    vis

//tooltip
const tip = d3.tip().attr('class', 'd3-tip').html(function (d) {
  return "< "+ d.name + " />"
})

// Node size evaluator
const setValueMethod = (sortType) => (
  pack.value(({ children=[], ref, width=1, height=1 }) => {
    switch (sortType) {
      case 'area':
        return width * height
      case 'height':
        return height
      case 'width':
        return width
      case 'hover':
        return $(ref).data('hovercount') + 1 || 1
      case 'click':
        return $(ref).data('clickcount') + 1 || 1
      case 'children':
      default:
        return children.length + 1 || 1
    }
  })
)

//DOM Manipulation
const update = (rootNode, sortType) => {
  setValueMethod(sortType)
  
  const nodes = pack.nodes(rootNode);
  updateCircles(nodes);
}

const initVisLayout = () => {
  const r = 400,
        w = 400,
        h = 400,
        x = d3.scale.linear().range([0, r]),
        y = d3.scale.linear().range([0, r])
  
  pack = d3.layout.pack()
    .sort(null)
    .size([r, r])
    .padding(2)

  vis = d3.select("svg.bubble-chart")
    .attr("width", w)
    .attr("height", h)
    .attr("opacity", 1)
    .append("svg:g")
    .attr("class", "outter-g")
    .call(tip)
}

const updateCircles = (nodes) => {
  const circles = vis.selectAll("circle")
          .data(nodes, d => d.uniqueId)

  circles
    .style("stroke", getBorderColor)
    .transition()
      .duration(750)
      .attr("cx", ({ x }) => x)
      .attr("cy", ({ y }) => y)
      .attr("r", ({ r }) => r)
      
  circles.enter().append("svg:circle")
    .attr("class", getClass)
    .attr("id", ({ uniqueId }) => 'n' + uniqueId)
    .attr("cx", ({ x }) => x)
    .attr("cy", ({ y }) => y)
    .attr("r", ({ r }) => r)
    .style("stroke", getBorderColor)
    .style("fill", getFillColor)
    .style("stroke-width", 1.5)
    .style("opacity", getOpacity)
    .on("click", onCircleClick)
    .on('mouseover', d => {
      tip.attr('class', 'd3-tip animate').show(d)
    })
    .on('mouseout', d => {
      tip.attr('class', 'd3-tip').show(d)
      tip.hide()
    })

  circles.exit()
    .transition()
      .duration(750)
      .attr("r", 0)
      .remove()

  circles.order()
}

const onCircleClick = ({ ref }) => {
  if (!ref) {
    return
  }

  console.log("d.ref: ", ref)

  d3.select(ref)
    .style("box-shadow", '0 0 0 #888')
    .transition()
    .duration(10)
    .style("box-shadow", '0px 0px 50px 15px rgba(0,0,0,0.75)')
    .transition()
      .delay(1000)
      .duration(10)
      .style("box-shadow", '0 0 0 #888')
}


class DOMTreeVis extends Component {
  componentDidMount () {
    this.props.updateVisData(document.body)
    initVisLayout()

    $(window)
      .on('mouseover', mousoverCounter)
      .on('click', clickCounter)
  }

  componentDidUpdate () {
    const { visData, sortType } = this.props

    update(visData, sortType)
  }

  componentWillUnmount () {
    $(window)
      .off('mouseover', mousoverCounter)
      .off('click', clickCounter)
  }

  render () {
    return (
      <div className="page-content">
        <h3>HTML Tree Structure</h3>
        <svg className="bubble-chart"></svg>
      </div>
    )
  }
}

DOMTreeVis.propTypes = {
  visData: PropTypes.object.isRequired,
  sortType: PropTypes.string.isRequired,
  updateVisData: PropTypes.func.isRequired,
  updateVisSortType: PropTypes.func.isRequired
}


export default DOMTreeVis
