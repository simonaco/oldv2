import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Register from '.'

storiesOf('Components|Pages.Register', module)
  .addDecorator(withKnobs)
  .add('Register prompt', () => {
    return <Register onRegister={action('user-register')} />
  })
