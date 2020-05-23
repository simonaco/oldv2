import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { decorate } from '@storybook/addon-actions'
import faker from 'faker'
import BookGrid from '.'
import BookCard from '../card'

const bookProgress = decorate([args => args.slice(0, 2)])

const books = (howMany = 10) => {
  let books = []
  faker.seed(1234)
  for (let i = 0; i < howMany; i++) {
    books.push({
      image: `https://picsum.photos/400/200?random=${i}`,
      title: `${faker.lorem.words(3)}`,
      description: `${faker.lorem.paragraph()}`,
      rating: `${faker.random.number({ min: 1, max: 5, precision: 0.01 })}`,
      bookId: `${faker.random.alphaNumeric(13)}`,
      onStarted: bookProgress.action('book-progress'),
    })
  }
  return books
}

storiesOf('Components|Elements.BookGrid', module)
  .addDecorator(withKnobs)
  .add('Book Grid for list', () => {
    return (
      <BookGrid>
        {books().map(book => (
          <BookCard key={book.bookId} {...book} />
        ))}
      </BookGrid>
    )
  })
