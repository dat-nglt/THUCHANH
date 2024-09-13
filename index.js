let http = require('http')
// let date = require('./date')
// let getURL = require('./getURL')
import date from './date.js'
import getURL from './getURL.js'
http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type':
        'text/html;charset=utf-8'
    })
    // res.write(date() + '<br/>')
    // res.write(
    //   getURL.getPath(req) + '<br/>'
    // )
    // res.write(
    //   getURL.getParams(req) + '<br/>'
    // )
    res.write(date() + '<br/>')
    res.write(
      getURL.getPath(req) + '<br/>'
    )
    res.write(
      getURL.getParams(req) + '<br/>'
    )
    res.end(
      'Hello, KTPM0121! Chúc bạn thành công với Nodejs'
    )
  })
  .listen(8080)
