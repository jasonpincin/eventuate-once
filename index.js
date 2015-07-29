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
