import exprees from 'express'
import dotenv from 'dotenv'
import date from './date'
import getURL from './getURL'
import viewEngine from './viewEngine'

const app = exprees()
viewEngine(app)
const PORT = process.env.PORT || 8080


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/date', (req, res) => {
  res.send(date())
})

app.get('/getUrl', (req, res) => {
  res.send(
    getURL.getPath(req) +
      '<br>' +
      getURL.getParamsURL(req)
  )
})

app.get('/ejs', (req, res) => {
  res.render('test')
})

app.listen(PORT, () => {
  console.log(
    `App listening on port ${PORT}`
  )
})
