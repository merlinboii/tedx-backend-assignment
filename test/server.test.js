const { Router } = require('express')
var express = require('express')
var app = express()

var controller = require('../api/controller/controller')
bodyParser = require('body-parser')

const cors = require('cors') // cross side origin
app.use(cors())

app.use(bodyParser.urlencoded({extended: true})) // user body-parser for input json data
app.use(bodyParser.json())

app.route('/attendees')
.get(controller.listAllattendees)
app.route('/attendee/:id')
.get(controller.readAattendeebyId)
app.route('/attendee')
.post(controller.AddAattendee)

app.route('/speakers')
.get(controller.listAllspeakers)
app.route('/speaker/:id')
.get(controller.readAspeakerbyId)
app.route('/speaker')
.post(controller.AddAspeaker)

module.exports = app

