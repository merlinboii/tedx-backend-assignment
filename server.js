const { Router } = require('express')
var express = require('express')
var app = express()

port = process.env.PORT || 80

bodyParser = require('body-parser')

const cors = require('cors') // cross side origin
app.use(cors())

app.use(bodyParser.urlencoded({extended: true})) // user body-parser for input json data
app.use(bodyParser.json())

var route = require('./api/routes/routes')
route(app)
app.listen(port)
console.log('User List Server started on : '+port)

