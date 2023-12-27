const express = require('express')
const app = express()
const PORT = process.env.APP_PORT ?? 3000

app.get('/', function (req, res) {
  res.send('First test app auto build')
})

app.listen(PORT, () =>{
    console.log('Server is running http://localhost:{PORT}')
}) 