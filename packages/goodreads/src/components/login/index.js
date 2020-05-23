import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'
import { doLogin } from './actions'
import { Redirect } from 'react-router-dom'

const { Login, NavBar } = components

class DashboardLogin extends Component {
  static defaultProps = {
    onLogin: () => {},
  }
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  }

  handleLogin = (email, password) => {
    const { dispatch } = this.props
    return dispatch(doLogin(email, password))
  }

  render() {
    const { success } = this.props
    return (
      <Fragment>
        <NavBar />
        {success ? <Redirect to="/" /> : <Login onLogin={this.handleLogin} />}
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  const { isLoading, error, success } = state.login
  return { isLoading, error, success }
}

export default connect(mapStateToProps)(DashboardLogin)
