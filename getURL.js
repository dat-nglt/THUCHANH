let url = require('url')
const getPath = (req, res) => {
  return req.url
}

const getParams = (req, res) => {
  let urlData = url.parse(req.url, true)
  return JSON.stringify(urlData.query)
}

// module.exports = { getPath, getParams }
export default { getParams, getPath }
