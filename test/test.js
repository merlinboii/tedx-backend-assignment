const request = require('supertest')
const attendees = require('../api/data/attendees')
const speakers = require('../api/data/speakers')
const app = require('./server.test')

describe('filter()', () => {
    let server

    beforeEach(() => (server = app.listen()))
    afterEach(() => server.close())
    //=========== Attendees Testing ===========//
    describe('GET/ attendees with out filter', () => {
        it('should be response all attendees', async () => {
            await request(server)
                .get('/attendees')
                .expect({
                    status: 200,
                    data: [{
                            id: "1",
                            firstName: "Ji-eun",
                            lastName: "Lee",
                            email: "iu@celebrity.com"
                        },
                        {
                            id: "2",
                            firstName: "Minho",
                            lastName: "Choi",
                            email: "minho@shineesback.com"
                        }
                    ]
                })
        })
    })
    describe('GET/ attendees with filter', () => {
        it('should filter that property', async () => {
            await request(server)
                .get('/attendees?fields=firstName,email')
                .expect({
                    status: 200,
                    data: [{
                            firstName: 'Ji-eun',
                            email: 'iu@celebrity.com'
                        },
                        {
                            firstName: 'Minho',
                            email: 'minho@shineesback.com'
                        }
                    ]
                })
        })
    })
    describe('GET/ attendees with sortAsc', () => {
        it('should sort the attendees by field', async () => {
            await request(server)
                .get('/attendees?sortAsc=lastName')
                .expect({
                    status: 200,
                    data: [{
                            id: "2",
                            firstName: "Minho",
                            lastName: "Choi",
                            email: "minho@shineesback.com"
                        },
                        {
                            id: "1",
                            firstName: "Ji-eun",
                            lastName: "Lee",
                            email: "iu@celebrity.com"
                        }
                    ]
                })
        })
    })
    describe('GET/ a attendee with out filter', () => {
        it('should response only one attendee', async () => {
            await request(server)
                .get('/attendee/' + attendees.attendees[1].id)
                .expect({
                    status: 200,
                    data: {
                        id: "2",
                        firstName: "Minho",
                        lastName: "Choi",
                        email: "minho@shineesback.com"
                    }
                })
        })
    })
    describe('GET/ a attendee with filter', () => {
        it('should filter that property', async () => {
            await request(server)
                .get('/attendee/' + attendees.attendees[1].id + '?fields=id,lastName')
                .expect({
                    status: 200,
                    data: {
                        id: "2",
                        lastName: "Choi"
                    }
                })
        })
    })

    //=========== Speakers Testing ===========//
    describe('GET/ speakers with out filter', () => {
        it('should be response all speakers', async () => {
            await request(server)
                .get('/speakers')
                .expect({
                    status: 200,
                    data: [{
                            id: "1",
                            firstName: "Greta",
                            lastName: "Thunberg",
                            topic: "Climate Change is Real"
                        },
                        {
                            id: "2",
                            firstName: "Elon",
                            lastName: "Musk",
                            topic: "Bitcoin and Climate Change"
                        }
                    ]
                })
        })
    })
    describe('GET/ speakers with filter', () => {
        it('should filter that property', async () => {
            await request(server)
                .get('/speakers?fields=firstName,topic')
                .expect({
                    status: 200,
                    data: [{
                            firstName: "Greta",
                            topic: "Climate Change is Real"
                        },
                        {
                            firstName: "Elon",
                            topic: "Bitcoin and Climate Change"
                        }
                    ]
                })
        })
    })
    describe('GET/ speakers with sortAsc', () => {
        it('should sort the speakers by field', async () => {
            await request(server)
                .get('/speakers?sortAsc=topic')
                .expect({
                    status: 200,
                    data: [{
                            id: "2",
                            firstName: "Elon",
                            lastName: "Musk",
                            topic: "Bitcoin and Climate Change"
                        },
                        {
                            id: "1",
                            firstName: "Greta",
                            lastName: "Thunberg",
                            topic: "Climate Change is Real"
                        }
                    ]
                })
        })
    })
    describe('GET/ a speaker with out filter', () => {
        it('should response only one speaker', async () => {
            await request(server)
                .get('/speaker/' + speakers.speakers[0].id)
                .expect({
                    status: 200,
                    data: {
                        id: "1",
                        firstName: "Greta",
                        lastName: "Thunberg",
                        topic: "Climate Change is Real"
                    }
                })
        })
    })
    describe('GET/ a speaker with filter', () => {
        it('should filter that property', async () => {
            await request(server)
                .get('/speaker/' + speakers.speakers[0].id + '?fields=id,lastName')
                .expect({
                    status: 200,
                    data: {
                        id: "1",
                        lastName: "Thunberg"
                    }
                })
        })
    })
})
