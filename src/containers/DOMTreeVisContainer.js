import React from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import { updateDOMTree, updateVisSortType } from '../actions'
import { getUniqueId, xmlToJson } from '../services/visService'
import DOMTreeVis from '../components/DOMTreeVis'


const mapStateToProps = (state, ownProps) => ({
  visData: state.DOMTree.data,
  sortType: state.DOMTree.sortType
})

const mapDispatchToProps = (dispatch) => ({
  updateVisData: (htmlData) => {
    dispatch(updateDOMTree(xmlToJson(htmlData)))
  },

  updateVisSortType: (sortType) => {
    updateVisSortType(sortType)
  }
})

const DOMTreeVisContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DOMTreeVis)

export default DOMTreeVisContainer

