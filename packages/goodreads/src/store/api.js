import axios from 'axios'

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

export function fetchMeta() {
  return client.get('/meta')
}

export function fetchRating() {
  return client.get('/ratings')
}

export function fetchImages() {
  return client.get('/images')
}

export function createUser({ email, password }) {
  return client.post('/auth/register', { email, password })
}

export function authenticateUser({ email, password }) {
  return client.post('/auth/authenticate', { email, password })
}

export function checkToken() {
  return client.post('/auth/check-token')
}

export function fetchBooksInProgress({ username }) {
  return client.get(`/book-progress/${username}`)
}
