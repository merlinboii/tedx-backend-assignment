'use strict'
module.exports = function(app){
    var controller = require('../controller/controller')

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

}
