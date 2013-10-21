var kern = require('../index')
  , sizzle = require('sizzle')

sizzle('body')[0].insertAdjacentHTML(
    'afterbegin'
  , '<h1> What a lovely block of text </h1>' +
    '<div> Some text </div>' +
    '<div>A number of additional sections</div>'
  )

var k = kern('body')[0]
