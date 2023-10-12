const express = require('express')
const serverless = require('serverless-http')
const app = express()
app.get('/hello', (req, res) => res.send('Hello World 2!'))
app.listen(3000, ()=> console.log('listening on Port 3000!'))

module.exports.handler = serverless(app)