var Promise = require('promise-polyfill')

module.exports = function eventuateOnce (eventuate, cb) {
    var done = new Promise(function oncePromise (resolve) {
        eventuate(function once (data) {
            eventuate.removeConsumer(once)
            resolve(data)
        })
    })
    if (typeof cb === 'function') done.then(cb)
    return done
}
