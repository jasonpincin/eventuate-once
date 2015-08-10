var test      = require('tape'),
    eventuate = require('eventuate'),
    once      = require('..')

test('once.match', function (t) {
    t.plan(3)

    var event = eventuate()

    once.match(event, filter, function consume (data) {
        t.equals(data.id, 1, 'callback consumer receives matching data')
    })
    t.equals(event.consumers.length, 1, '.consumers should contain all consumers')
    event.produce({ id: 2 })
    event.produce({ id: 1 })
    event.produce({ id: 3 })
    t.equals(event.consumers.length, 0, 'each consumer removed from consumers after event')

    function filter (evt) {
        return evt.id === 1
    }
})

test('once.match (promise)', function (t) {
    t.plan(3)

    var event = eventuate()

    once.match(event, filter).then(function consume (data) {
        t.equals(data.id, 1, 'callback consumer receives matching data')
    })
    t.equals(event.consumers.length, 1, '.consumers should contain all consumers')
    event.produce({ id: 2 })
    event.produce({ id: 3 })
    event.produce({ id: 1 })
    t.equals(event.consumers.length, 0, 'each consumer removed from consumers after event')

    function filter (evt) {
        return evt.id === 1
    }
})
