import express from 'express'
import dotenv from 'dotenv'
import viewEngine from './viewEngine'
import initWebRoute from './routes/webRoute'
import initApiRoute from './routes/apiRoute'
import path from 'path'
import bodyParser from 'body-parser'
import createSession from './configs/session'
import flash from 'connect-flash'
import cors from 'cors'

const corsOptions = {
  origin: ['http://localhost:3000', 'https://localhost:3000'],
  optionSuccessStatus: 200
}


const app = express()

app.use(cors(corsOptions))

app.use(flash())

dotenv.config()

app.use(express.static(path.join(__dirname, '/public')))

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

createSession(app)

app.use(bodyParser.json())

viewEngine(app)

initApiRoute(app)

initWebRoute(app)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
