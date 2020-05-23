import React from 'react'
import { storiesOf } from '@storybook/react'
import colors from '../theme/colors'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Body from './body'

storiesOf('Typography|Body.Body', module)
  .addDecorator(withKnobs)
  .add('Basic Body with configurable style', () => {
    const tags = {
      div: 'div',
      span: 'span',
      pre: 'pre',
    }
    const filteredColors = Object.keys(colors).reduce((acc, value) => {
      if (typeof colors[value] === 'string') {
        acc[value] = colors[value]
      }
      return acc
    }, {})

    const tag = select('Tags', tags, 'apple')
    const fontColor = select(
      'Palette',
      filteredColors,
      Object.entries(filteredColors).shift(1)[1]
    )

    return (
      <Body tag={tag} color={fontColor}>
        {text('Content', 'Sample Header')}
      </Body>
    )
  })
