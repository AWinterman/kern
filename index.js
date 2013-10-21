module.exports = kern

var sizzle = require('sizzle')

function kern(selector) {
  var els = sizzle(selector)

  var nodes = []

  for(var i = 0, len = els.length; i < len; ++i) {
    get_all_text_nodes(els[i], nodes)
  }

  for(var n = 0, len = nodes.length; n < len; ++i) {

    var old_text = nodes[n].textContent
      , new_text = nodes[n].textContent.split('')

    for(var i = 0, len = new_text.length; i < len; ++i) {
      new_text[i] = '<span data-letter="' + new_text[i] + '"</span>'
    }

    new_text = new_text.join('')

    n.innerHTML = new_text
  }

  return els
}

function get_all_text_nodes(el, nodes) {
  var childnodes = [].slice.call(el.childNodes)

  for(var i = 0, len = childnodes.length; i < len; ++i) {
    if(childnodes[i] === '#text') {
      nodes.push(childnodes[i])

      continue
    }

    get_all_text_nodes(childnodes[i], nodes)
  }
}

