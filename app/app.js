const express = require('express')
const app = express()

const HOSTNAME = '127.0.0.1'
const PORT = 3000
const HTTP_STATUS = 200

app.get('/',(req, res) => {
  const location = req.query.location
  // console.log(req.query.location)
  res.set('Location', location)
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log('server start.')
})
