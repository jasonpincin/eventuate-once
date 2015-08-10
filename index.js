var Promise = require('promise-polyfill')

module.exports = function eventuateOnce (eventuate, cb) {
    var done = new Promise(function oncePromise (resolve) {
        eventuate(function once (data) {
            eventuate.removeConsumer(once)
            if (typeof cb === 'function') cb(data)
            resolve(data)
        })
    })
    return done
}

module.exports.match = function eventuateOnceMatch (eventuate, filter, cb) {
    var done = new Promise(function onceMatchPromise (resolve) {
        eventuate(function onceMatch (data) {
            if (filter(data)) {
                eventuate.removeConsumer(onceMatch)
                if (typeof cb === 'function') cb(data)
                resolve(data)
            }
        })
    })
    return done
}
