require('dotenv').config()

const jsonServer = require('json-server')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const server = require('json-server').create()
const bcrypt = require('bcrypt')
const chalk = require('chalk')
const low = require('lowdb')
const Memory = require('lowdb/adapters/Memory')

const {
  randomThrottleMiddleware,
  authRequiredMiddleware,
  withAuth,
} = require('./middlewares')
const jsonServerMiddlewares = jsonServer.defaults()

const port = process.env.API_PORT
const basePath = process.env.BASE_PATH
const secret = process.env.SECRET
const environment_is_test = process.env.IS_TEST
const snapshots = []

const jsonFixturePath =
  environment_is_test === 'true' ? 'data/test-data.json' : 'data/data.json'

const router = jsonServer.router(jsonFixturePath)
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cookieParser())

server.use(jsonServerMiddlewares)
server.use(authRequiredMiddleware)
server.use(randomThrottleMiddleware)

server.post('/auth/register', async (req, res) => {
  const { email, password } = req.body
  const rounds = process.env.SALT_ROUNDS || 12
  const passHash = await bcrypt.hash(password, rounds)
  const create = () =>
    axios.post(`${basePath}:${port}/users`, {
      id: email,
      passwordHash: passHash,
    })
  const rollback = () => axios.delete(`${basePath}:${port}/users/${email}`)
  const initializeBookProgress = () =>
    axios.post(`${basePath}:${port}/book-progress`, {
      id: email,
      books: [],
    })
  create()
    .then(() =>
      initializeBookProgress()
        .then(() => {
          console.log(chalk.green('Initialized book progress'))
          return res.status(201).json({
            success: 'User successfully created and book list initialized :D',
          })
        })
        .catch((err) => {
          console.log(chalk.red(err))
          rollback()
            .then(() =>
              console.warn(
                chalk.yellow(
                  'User rolled back because of failure, failed to create books in progress'
                )
              )
            )
            .then(() =>
              console.log(
                chalk.red(`Unable to initialize books list for user ${err}`)
              )
            )
            .then(() =>
              res
                .status(500)
                .json({ failed: `Unable to create user, failed with ${err}` })
            )
        })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ failed: `Unable to create user, failed with ${err}` })
    )
})

server.post('/auth/authenticate', async (req, res) => {
  const { email, password } = req.body
  axios
    .get(`${basePath}:${port}/users/${email}`)
    .then(async ({ data }) => {
      const passwordMatches = await bcrypt.compare(password, data.passwordHash)
      if (!passwordMatches) {
        return res.status(401).json({ error: 'Incorrect password' })
      }
      const payload = { email }
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h',
      })
      return res.cookie('token', token, { httpOnly: true }).sendStatus(200)
    })
    .catch(({ response }) => {
      const { status } = response || { status: 418 }
      switch (status) {
        case 500:
          return res.status(500).json({
            error: 'Internal error fetching user data :(',
          })
        case 404:
          return res.status(404).json({
            error: 'User with email doesnt exist :(, maybe typo?',
          })
        default:
          return res.status(500).json({
            error: 'No clue why this happened ?!',
          })
      }
    })
})

server.post('/auth/check-token', withAuth, (req, res) => {
  return res.status(200).json({
    username: req.email,
  })
})

if (environment_is_test === 'true') {
  server.post('/test/snapshot', async (req, res) => {
    const { data } = await axios.get(`${basePath}:${port}/db`)
    const snapshot = low(new Memory()).setState(data)
    snapshots.push(snapshot)
    return res.status(201).json({
      message: 'Snapshot of internal db created',
    })
  })

  server.post('/test/restore-snapshot', (req, res) => {
    const snapshot = snapshots.pop()
    router.db.setState(snapshot)
    router.db.write()
    return res.status(200).json({
      message: 'Rolled back to most recent snapshot',
    })
  })
}

server.use(router)

server.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
