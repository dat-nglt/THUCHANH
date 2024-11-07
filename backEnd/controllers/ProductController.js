import productModel from '../models/productModel'

const getProductPage = async (req, res) => {
  try {
    let productData = await productModel.getAllProducts()
    return res.render('main', {
      data: {
        title: 'Product Page',
        page: 'product',
        sessionData: req.session.user,
        rows: productData
      },
      messages: req.flash('error')
    })
  } catch (error) {
    return res.render('error', {
      data: {
        title: 'Error',
        page: 'error'
      }
    })
  }
}

const getDetailProductPage = async (req, res) => {
  try {
    const productID = req.params.id
    let detailsProductData = await productModel.getDetailsProduct(productID)
    return res.render('main', {
      data: {
        title: 'Product Page',
        page: 'detailsProduct',
        sessionData: req.session.user,
        rows: detailsProductData[0]
      },
      messages: req.flash('error')
    })
  } catch (error) {
    return res.render('error', {
      data: {
        title: 'Error',
        page: 'error'
      }
    })
  }
}

export default { getProductPage, getDetailProductPage }
