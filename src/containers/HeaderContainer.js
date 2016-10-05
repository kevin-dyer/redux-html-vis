import React from 'react'
import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'
import Header from '../components/Header'


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: (showDrawer) => dispatch(toggleDrawer(showDrawer))
})

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer

