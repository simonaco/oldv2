import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Route } from 'react-router-dom'
import StoryRouter from 'storybook-react-router'
import NavBar from '.'

const Dashboard = () => <div>I'm the dashboard component</div>

const Login = () => <div>I'm the login component</div>

const WrappedNavbar = ({ authenticated, username }) => (
  <Fragment>
    <NavBar authenticated={authenticated} username={username} />
    <Route exact path="/" component={() => <Dashboard />} />
    <Route exact path="/login" component={() => <Login />} />
  </Fragment>
)

storiesOf('Components|Elements.NavBar', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('Navbar with wrapper', () => {
    return (
      <WrappedNavbar
        authenticated={boolean('Authenticated', false)}
        username={text('Username', 'artur@artur.wtf')}
      />
    )
  })
