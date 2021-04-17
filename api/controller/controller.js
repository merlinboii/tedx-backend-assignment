'use strict'
const attendees = require('../data/attendees')
const speakers = require('../data/speakers')

//======================== ATTENDEES ========================//

exports.listAllattendees = function(req,res){
    var data = attendees.attendees
    var result 
   // check non-json
   if (!data || 'object' != typeof data) return
   // check for filter & sort
   let filter = req.query.fields
   let sortAsc = req.query.sortAsc
   if (filter) {
        result = filterData(data,filter)
   }
   else if(sortAsc){   
        result = data.sort(CompareData(sortAsc))
   }
   else {
       result = data
   }
   //format & response data
   var json = formatResponse(result,res.statusCode)
   res.json(json)
}

exports.readAattendeebyId = function(req,res){
    var index = parseInt(req.params.id)-1
    var data = attendees.attendees[index]
    if (!data || 'object' != typeof data) return
    // check for filter
    let filter = req.query.fields
    if (!filter) {
        var json = formatResponse(data,res.statusCode)
        res.json(json)
    }
    var result = filterData(data,filter)
    var json = formatResponse(result,res.statusCode)
    res.json(json)
}

exports.AddAattendee = function(req,res){
    var index = attendees.attendees.length
    var id=''
     var attendee = {
                    "id": id.concat(index+1),
                    "firstName": req.body.firstName,
                    "lastName": req.body.lastName,
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
    var result 
   // check non-json
   if (!data || 'object' != typeof data) return
   // check for filter & sort
   let filter = req.query.fields
   let sortAsc = req.query.sortAsc
   if (filter) {
        result = filterData(data,filter)
   }
   else if(sortAsc){   
        result = data.sort(CompareData(sortAsc))
   }
   else {
       result = data
   }
   //format & response data
   var json = formatResponse(result,res.statusCode)
   res.json(json)
}

exports.readAspeakerbyId = function(req,res){
    var index = parseInt(req.params.id)-1
    var data = speakers.speakers[index]
    // check non-json
    if (!data || 'object' != typeof data) return
    // check for filter
    let filter = req.query.fields
    if (!filter) {
        var json = formatResponse(data,res.statusCode)
        res.json(json)
    }
    var result = filterData(data,filter)
    var json = formatResponse(result,res.statusCode)
    res.json(json)
}

exports.AddAspeaker = function(req,res){
    var index = speakers.speakers.length
    var id = ''
    var speaker = {
                   "id": id.concat(index+1),
                   "firstName": req.body.firstName,
                   "lastName": req.body.lastName,
                   "topic": req.body.topic
               }                                 
   speakers.speakers[index] = speaker
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

function filterData(data,filter){
    if ('string' == typeof filter) filter = filter.split(',' )
    if (Array.isArray(data)) {
        return data.map(obj => {
            return filter.reduce((result, key) => {
                result[key] = obj[key]
                return result
             }, {})
            })
    }
    else {
        return filter.reduce((result, key) => {
            result[key] = data[key]
            return result
          }, {})
    }
}

function CompareData(prop) {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
}       
