const express = require('express')
const home = require('./handlers/home')
const app = express()
const port = process.env.PORT || 3000

app.get('/', home.get)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
