import express from 'express'
import dotenv from 'dotenv'
import viewEngine from './viewEngine'
import initWebRoute from './routes/webRoute'
import path from 'path'
import bodyParser from 'body-parser'
const app = express()
dotenv.config()
app.use(
  express.static(
    path.join(__dirname, '/public')
  )
)
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())
viewEngine(app)
initWebRoute(app)
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(
    `App listening on port ${PORT}`
  )
})
