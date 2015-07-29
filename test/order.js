var test      = require('tape'),
    eventuate = require('eventuate'),
    once      = require('..')

test('once order', function (t) {
    t.plan(1)

    var event1 = eventuate()
    var event2 = eventuate()
    var event2Happened = false

    once(event1, function consume (data) {
        t.equals(event2Happened, false, 'once callback happens in expected order')
    })
    event2(function () {
        event2Happened = true
    })
    event1.produce()
    event2.produce()
})
