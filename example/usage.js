var eventuate = require('eventuate'),
    once      = require('..')

var request = eventuate()

// once cb
once(request, function (req) {
    console.log(req)
})
request.produce({ url: '/index.html' })

// once promise
once(request).then(console.log)
request.produce({ url: '/README.md' })

// will result in no actions because consumers are gone
// (use "requireConsumers" to make this an error condition)
request.produce({ url: '/LICENSE' })
