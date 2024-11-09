const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY || 'default_secret_key'

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token // Lấy token từ cookie

  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403) // Forbidden
      }
      req.user = user // Thêm thông tin người dùng vào request
      next() // Tiếp tục đến các route khác
    })
  } else {
    res.sendStatus(401) // Unauthorized
  }
}

module.exports = authenticateJWT
