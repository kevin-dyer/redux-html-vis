import React from 'react'
import { connect } from 'react-redux'
import { updateVisSortType, fetchHTMLPage, updateVisSourceUrl } from '../actions'
import About from '../components/About'


const mapStateToProps = (state, ownProps) => ({
  sortType: state.DOMTree.sortType,
  sourceUrl: state.DOMTree.sourceUrl
})

const mapDispatchToProps = (dispatch) => ({
  updateVisSortType: sortType => dispatch(updateVisSortType(sortType))
})

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(About)

export default AboutContainer

