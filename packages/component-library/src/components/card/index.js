import React from 'react'
import { Box, Card, Image } from 'rebass'
import { Select } from '@rebass/forms'
import BeautyStars from 'beauty-stars'
import { typography } from '../../typography'

const { Artifika, Body } = typography

const actions = [
  {
    key: 'start-reading',
    name: 'Start reading...',
  },
  {
    key: 'not-started',
    name: 'Not reading...',
  },
]

export default ({
  image,
  title,
  description,
  rating,
  onStarted,
  bookId,
  authenticated,
}) => (
  <Box width={1}>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}
    >
      <Image src={image} />
      <Box p={2}>
        <BeautyStars value={rating} />
        {authenticated && (
          <Box pt={3}>
            <Select
              id="book-action"
              name="book-action"
              defaultValue="Not reading..."
              onChange={evt => onStarted(bookId, evt.target.value)}
              sx={{
                borderRadius: 5,
              }}
            >
              {Object.entries(actions).map(([_, action]) => (
                <option key={action.key} value={action.key}>
                  {action.name}
                </option>
              ))}
            </Select>
          </Box>
        )}
        <Artifika tag="h3">{title}</Artifika>
        <Body fontSize={0}>{description}</Body>
      </Box>
    </Card>
  </Box>
)
