import express from 'express'

const getContactPage = (req, res) => {
  return res.render('main', {
    data: {
      title: 'Contact Page',
      page: 'contact'
    }
  })
}

export default getContactPage
