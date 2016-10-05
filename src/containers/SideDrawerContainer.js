import { connect } from 'react-redux'
import SideDrawer from '../components/SideDrawer'
import { toggleDrawer, signOut } from '../actions'


const mapStateToProps = (state) => ({
    showDrawer: state.ui.showDrawer
})

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: (showDrawer) => dispatch(toggleDrawer(showDrawer))
})

const SideDrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideDrawer)

export default SideDrawerContainer

