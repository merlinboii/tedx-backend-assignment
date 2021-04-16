'use strict'
var jsonQuery = require('json-query')
const attendees = require('../data/attendees')
const speakers = require('../data/speakers')

//======================== ATTENDEES ========================//
exports.listAllattendees = function(req,res){
    var data = attendees.attendees
    var json = formatResponse(data,res.statusCode)
    res.json(json)
}

exports.readAattendeebyId = function(req,res){
    var result = attendees.attendees[req.params.id-1]
    var json = formatResponse(result,res.statusCode)
    res.json(json)
}

exports.AddAattendee = function(req,res){
    var index = attendees.attendees.length
     var attendee = {
                    "id": index+1,
                    "firstname": req.body.firstName,
                    "lastname": req.body.lastName,
                    "email": req.body.email
                }                                 
    attendees.attendees[index] = attendee
    var data = attendees.attendees
    var json = formatResponse(data,res.statusCode)
    res.json(json)
}

//======================== SPEAKERS ========================//

exports.listAllspeakers = function(req,res){
    var data = speakers.speakers
    var json = formatResponse(data,res.statusCode)
    res.json(json)
}

exports.readAspeakerbyId = function(req,res){
    var result = speakers.speakers[req.params.id-1]
    var json = formatResponse(result,res.statusCode)
    res.json(json)
}

exports.AddAspeaker = function(req,res){
    var index = speakers.speakers.length
    var attendee = {
                   "id": index+1,
                   "firstname": req.body.firstName,
                   "lastname": req.body.lastName,
                   "topic": req.body.topic
               }                                 
   speakers.speakers[index] = attendee
   var data = speakers.speakers
   var json = formatResponse(data,res.statusCode)
   res.json(json)
}

//======================== Another Functions ========================//

function formatResponse(data,status){
    return {
        status : status,
        data:data
    }
    
}