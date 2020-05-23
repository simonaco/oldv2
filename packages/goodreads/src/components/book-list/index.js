import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'react-virtualized'
import {
  fetchBooks,
  fetchBooksInProgress,
  startBook,
  stopBook,
} from './actions'
import { getBooks, getBooksProgress } from './selectors'

import { connect } from 'react-redux'
import { components, typography } from '@goodreads-v2/component-library'

const { BookGrid, BookCard } = components
const { Artifika, Body } = typography

class BookList extends Component {
  static defaultProps = {
    fetchBooks: () => {},
    books: [],
    images: [],
    booksInProgress: [],
  }
  static propTypes = {
    fetchBooks: PropTypes.func.isRequired,
  }

  componentDidUpdate = prevProps => {
    const { username: prevUsername } = prevProps
    const { dispatch, username } = this.props
    if (prevUsername !== username) {
      dispatch(fetchBooksInProgress(username))
    }
  }
  componentDidMount = () => {
    const { dispatch, authenticated, username } = this.props
    dispatch(fetchBooks())
    if (authenticated) {
      dispatch(fetchBooksInProgress(username))
    }
  }

  render() {
    const { books: booksCollection, authenticated } = this.props
    const { booksInProgress } = this.props
    return (
      <Fragment>
        {authenticated && (
          <Fragment>
            <Artifika>Currently reading</Artifika>
            {booksInProgress.length ? (
              <BookGrid>
                {booksInProgress.map(book => (
                  <BookCard
                    key={`${book.id}${book.title}`}
                    authenticated={authenticated}
                    onStopped={stopBook}
                    {...book}
                  />
                ))}
              </BookGrid>
            ) : (
              <div>
                <Body tag="h6">Nothing to show here...yet :(</Body>
              </div>
            )}
          </Fragment>
        )}
        <Artifika>Books</Artifika>
        <BookGrid>
          {booksCollection.map(book => (
            <BookCard
              key={`${book.id}${book.title}`}
              authenticated={authenticated}
              onStarted={startBook}
              onStopped={stopBook}
              {...book}
            />
          ))}
        </BookGrid>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  const { isLoading, error } = state.books
  const { error: authError, username } = state.authStatus
  const authenticated = authError === null
  const books = getBooks(state)
  const booksInProgress = getBooksProgress(state)
  return {
    books,
    isLoading,
    error,
    authenticated,
    username,
    booksInProgress,
  }
}

export default connect(mapStateToProps)(BookList)
