import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'
import { doRegister } from './actions'

const { Register, NavBar } = components

class DashboardRegister extends Component {
  static defaultProps = {
    onRegister: () => {},
  }
  static propTypes = {
    onRegister: PropTypes.func.isRequired,
  }

  handleRegister = (username, password) => {
    const { dispatch } = this.props
    return dispatch(doRegister(username, password))
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Register onRegister={this.handleRegister} />
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  const { isLoading, error, success } = state.register
  return { isLoading, error, success }
}

export default connect(mapStateToProps)(DashboardRegister)
