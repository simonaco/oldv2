import React from 'react'
import { storiesOf } from '@storybook/react'
import colors from '../theme/colors'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Artifika from './artifika'

storiesOf('Typography|Headings.Artifika', module)
  .addDecorator(withKnobs)
  .add('Basic Header with configurable style', () => {
    const tags = {
      H1: 'h1',
      H2: 'h2',
      H3: 'h3',
      H4: 'h4',
      H5: 'h5',
      H6: 'h6',
    }
    const filteredColors = Object.keys(colors).reduce((acc, value) => {
      if (typeof colors[value] === 'string') {
        acc[value] = colors[value]
      }
      return acc
    }, {})

    const tag = select('Tags', tags, 'h1')
    const fontColor = select(
      'Palette',
      filteredColors,
      Object.entries(filteredColors).shift(1)[1]
    )

    return (
      <Artifika tag={tag} color={fontColor}>
        {text('Content', 'Sample Header')}
      </Artifika>
    )
  })
