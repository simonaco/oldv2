import { Component } from 'react'
import { checkAuth } from './actions'
import { connect } from 'react-redux'

class AuthCheck extends Component {
  componentDidUpdate() {
    const { dispatch } = this.props
    dispatch(checkAuth())
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(checkAuth())
  }

  render() {
    const { children } = this.props
    return children
  }
}

const mapStateToProps = (state) => {
  const { username } = state.authStatus
  return { username }
}

export default connect(mapStateToProps)(AuthCheck)
