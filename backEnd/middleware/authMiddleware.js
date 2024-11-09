const jwt = require('jsonwebtoken')

const authenticateJWT = (req, res, next) => {
  try {
    const token = req.cookies.token

    if (token) {
      const user = jwt.verify(token, 'datdeptrainhatvutrunay')
      req.user = user
      next()
    } else {
      return res.status(401).json({
        message: 'Bạn không có quyền sử dụng chức năng này!'
      })
    }
  } catch (error) {
    console.log(secretKey)
  }
}

export default authenticateJWT
