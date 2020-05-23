import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthCheck from '../containers/auth-checker'
import App from '../components/app'
import DashboardLogin from '../components/login'
import DashboardRegister from '../components/register'

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <AuthCheck>
                <App {...props} />
              </AuthCheck>
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <AuthCheck>
                <DashboardLogin {...props} />
              </AuthCheck>
            )}
          />
          <Route
            exact
            path="/register"
            render={(props) => (
              <AuthCheck>
                <DashboardRegister {...props} />
              </AuthCheck>
            )}
          />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default Routes
