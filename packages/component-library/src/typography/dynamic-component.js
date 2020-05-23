import React from 'react'
import styled from 'styled-components'
import {
  space,
  lineHeight,
  fontSize,
  fontStyle,
  size,
  color,
  colorStyle,
  textStyle,
  fontFamily,
  fontWeight,
  letterSpacing,
  borderRadius,
} from 'styled-system'

const StyledDynamicComponent = styled.div`
  ${space}
  ${fontSize}
  ${fontStyle}
  ${color}
  ${size}
  ${colorStyle}
  ${textStyle}
  ${lineHeight}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
`

const DynamicComponent = ({ tag = 'div', children, ...props }) => {
  return (
    <StyledDynamicComponent as={tag} {...props}>
      {children}
    </StyledDynamicComponent>
  )
}

DynamicComponent.defaultProps = {
  tag: 'div',
}

export default DynamicComponent
