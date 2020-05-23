# jungle-jim

This is a mock api for a book database based on `json-server` it emulates multiple endpoints.

## Endpoints are:

`/meta` => book meta information such as `isbn`, `isbn13`, `authors` etc

`/ratings` => average rating per book - requires authentication

`/images` => list of book covers

`/auth/registration` => create account, this will store it in the `json-server` data.json

`/auth/authentication` => this will allow you to login

`/auth/check-token` => endpoint to use for verifying token passed in from the client, since this will be a `httpOnly` token it needs to be done like this


## Middlewares:

I built some util middlewares:

`throttleMiddleware` => middleware for simulating slow response times

`authRequiredMiddleware` => since routes in `json-server` are implicit based on `data.json` added route matching to restrict access to those routes
