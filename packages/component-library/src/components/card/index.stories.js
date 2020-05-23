import React from 'react'
import { storiesOf } from '@storybook/react'
import { decorate } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import BookCard from '.'

const bookProgress = decorate([args => args.slice(0, 2)])

storiesOf('Components|Elements.BookCard', module)
  .addDecorator(withKnobs)
  .add('Book Card with configurable style', () => {
    return (
      <BookCard
        description={'example description'}
        image={
          'https://i.pinimg.com/600x315/73/20/9c/73209c21dec8e08ea18d41a5cc144c0d.jpg'
        }
        title={'harry potter'}
        bookId="9781566199094"
        onStarted={bookProgress.action('book-progress')}
        authenticated={boolean('Authenticated', false)}
      />
    )
  })
