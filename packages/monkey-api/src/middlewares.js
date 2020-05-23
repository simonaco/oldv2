const fs = require('fs')
const jwt = require('jsonwebtoken')

const secret = process.env.SECRET

const urlFragments = ['^/images', '^/meta', '^/ratings'].map(
  (fragment) => new RegExp(fragment)
)

const authUrls = ['^/auth/check-token'].map(
  (fragment) => new RegExp(fragment)
)

const throttled = (url) => {
  for (let check of urlFragments) {
    if (url.match(check)) {
      return true
    }
  }
  return false
}

const requiresAuth = (url) => {
  for (let check of authUrls) {
    if (url.match(check)) {
      return true
    }
  }
  return false
}

const randomThrottleMiddleware = (req, res, next) => {
  const delay = Math.ceil(Math.random() * 10000)

  if (throttled(req.url) && delay % 7 === 0) {
    setTimeout(() => next(), delay)
  } else {
    next()
  }
}

const authRequiredMiddleware = function (req, res, next) {
  const token = req.cookies.token
  if (!requiresAuth(req.url)) return next()
  if (!token) {
    res.status(401).send('Unauthorized: No token provided')
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token')
      } else {
        req.email = decoded.email
        next()
      }
    })
  }
}

const withAuth = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    res.status(401).send('Unauthorized: No token provided')
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token')
      } else {
        req.email = decoded.email
        next()
      }
    })
  }
}
module.exports = {
  randomThrottleMiddleware,
  authRequiredMiddleware,
  withAuth,
}
