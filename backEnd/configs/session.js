import RedisStore from 'connect-redis'
import session from 'express-session'
import { createClient } from 'redis'

const createSession = (app) => {
  let redisClient = createClient()
  redisClient.connect().catch(console.error)

  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
        prefix: 'myapp:'
      }),
      resave: false, // required: force lightweight session keep alive (touch)
      saveUninitialized: false, // recommended: only save session when data exists
      secret: 'keyboard cat'
    })
  )
}

export default createSession
