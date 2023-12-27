const express = require('express')
const app = express()
const PORT = process.env.APP_PORT ?? 3000

app.get('/', function (req, res) {
  res.send('Hello from App')
})

app.listen(PORT, () =>{
    console.log('Server is running http://localhost:{PORT}')
}) 