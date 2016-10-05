import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const AREA = 'area'
const WIDTH = 'width'
const HEIGHT = 'height'
const HOVER = 'hover'
const CLICK = 'click'
const CHILDREN = 'children'
const paperStyle = {
  margin: 20,
  padding: 20,
  display: 'inline-block',
  width: '85%',
  textAlign: 'left'
}
const buttonStyle = {
  margin: 5
}
const inputStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
}

const About = ({ sortType, updateVisSortType }) => (
  <div className="about-container">
    <Paper style={paperStyle} zDepth={3} >
      <h2>About this Visualization</h2>
      <p>
        This is a representation of the HTML DOM structure on THIS PAGE!
        Elements are colored by their type and sized by the number of children they have.
      </p>
      <p>
        Click on a node to highlight the HTML element it is representing with a box-shadow, and log its ref to the console. 
        Note that some elements may be hiden from view.
      </p>
      <h4>Try sizing the nodes by another parameter</h4>
      <p>
        Clicking on <b>AREA</b> will size the nodes by their referance element's width x height. <b>HOVER</b> sizes 
        based on the number of mouseover events triggered over each ref element. <b>CLICK</b> will
        do the same but by click events. Notice that as you interact with the page, the hover and click views will change over time.
      </p>
      <div>
        <RaisedButton
          onTouchTap={updateVisSortType.bind(this, AREA)}
          primary={ sortType === AREA }
          label="Area"
          style={buttonStyle} />
        <RaisedButton
          onTouchTap={updateVisSortType.bind(this, WIDTH)}
          primary={ sortType === WIDTH } 
          label="Width"
          style={buttonStyle} />
        <RaisedButton
          onTouchTap={updateVisSortType.bind(this, HEIGHT)}
          primary={ sortType === HEIGHT } 
          label="Height"
          style={buttonStyle} />
        <RaisedButton
          onTouchTap={updateVisSortType.bind(this, HOVER)}
          primary={ sortType === HOVER } 
          label="Hover"
          style={buttonStyle} />
        <RaisedButton
          onTouchTap={updateVisSortType.bind(this, CLICK)}
          primary={ sortType === CLICK } 
          label="Clicks"
          style={buttonStyle} />
        <RaisedButton
          onTouchTap={updateVisSortType.bind(this, CHILDREN)}
          primary={ sortType === CHILDREN } 
          label="Children"
          style={buttonStyle} />
      </div>
    </Paper>
  </div>
)

About.propTypes = {
  sortType: PropTypes.string.isRequired,
  updateVisSortType: PropTypes.func.isRequired
}

export default About