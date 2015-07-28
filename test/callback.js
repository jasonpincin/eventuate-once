var test      = require('tape'),
    eventuate = require('eventuate'),
    once      = require('..')

test('once (callback)', function (t) {
    t.plan(3)

    var event = eventuate()

    once(event, function consume (data) {
        t.equals(data, 'test', 'callback consumer receives data')
    })
    t.equals(event.consumers.length, 1, '.consumers should contain all consumers')
    event.produce('test')
    t.equals(event.consumers.length, 0, 'each consumer removed from consumers after event')
})
