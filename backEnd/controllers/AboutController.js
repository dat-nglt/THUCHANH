import express from 'express'

const getAboutPage = (req, res) => {
  return res.render('main', {
    data: {
      title: 'About Page',
      page: 'about'
    }
  })
}

export default getAboutPage
