import React from 'react'
import DynamicComponent from './dynamic-component'
import theme from '../theme'

const { bodyCopy } = theme.textStyles

export default props => (
  <DynamicComponent {...bodyCopy} {...props}>
    {props.children}
  </DynamicComponent>
)
