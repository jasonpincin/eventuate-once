# eventuate-once

[![NPM version](https://badge.fury.io/js/eventuate-once.png)](http://badge.fury.io/js/eventuate-once)
[![Build Status](https://travis-ci.org/jasonpincin/eventuate-once.svg?branch=master)](https://travis-ci.org/jasonpincin/eventuate-once)
[![Coverage Status](https://coveralls.io/repos/jasonpincin/eventuate-once/badge.png?branch=master)](https://coveralls.io/r/jasonpincin/eventuate-once?branch=master)

Act upon the next occurance of an eventuate

## example

```javascript
var eventuate = require('eventuate'),
    once      = require('eventuate-once')

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
```

## api

```javascript
var once = require('eventuate-once')
```

### once(eventuate [, cb])

Execute the optional `cb` (if provided) one time on the next data payload from the `eventuate`. This is like `eventuate(cb)` except that it only happens once. In addition, returns a `Promise` that resolves to the `eventuate` data payload.

## testing

`npm test [--dot | --spec] [--grep=pattern]`

Specifying `--dot` or `--spec` will change the output from the default TAP style. 
Specifying `--grep` will only run the test files that match the given pattern.

## coverage

`npm run coverage [--html]`

This will output a textual coverage report. Including `--html` will also open 
an HTML coverage report in the default browser.
