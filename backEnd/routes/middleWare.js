const checkUserPermissionUpdate = (req, res, next) => {
  const userId = req.session.user?.id
  const userRole = req.session.user?.role
  const paramId = req.params.id // Lấy ID từ URL params
  if (userId == paramId || userRole === 2) {
    next()
  } else {
    res.status(403)
    req.flash('error', 'Bạn không có quyền sử dụng chức năng này!')
    res.redirect('/')
  }
}

const checkUserPermissionAdd = (req, res, next) => {
  if (!req.session.user) {
    next()
  } else {
    res.status(403)
    req.flash('error', 'Bạn không có quyền sử dụng chức năng này!')
    res.redirect('/')
  }
}

const checkUserPermissionUpdateAPI = (req, res, next) => {
  const userId = req.session.user?.id
  const userRole = req.session.user?.role
  const paramId = req.params.id

  if (userId == paramId || userRole === 2) {
    next()
  } else {
    return res.status(403).json({
      message: 'Bạn không có quyền sử dụng chức năng này!'
    })
  }
}

export default {
  checkUserPermissionUpdate,
  checkUserPermissionAdd,
  checkUserPermissionUpdateAPI
}
