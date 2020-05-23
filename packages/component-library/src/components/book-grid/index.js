import React from 'react'
import { Tiles } from '@rebass/layout'
import BookCard from '../card'

export default ({ books, authenticated, children }) => (
  <Tiles columns={[1, 2, 2, 4, 6, 8]}>{children}</Tiles>
)
