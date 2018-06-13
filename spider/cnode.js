const cheerio = require('cheerio')
const superagent = require('superagent')

async function cnode() {
  const response = await superagent.get('https://cnodejs.org/')
  const $ = cheerio.load(response.text)
  const items = []
  $('#topic_list .topic_title').each(function(_, element) {
    const $element = $(element)
    items.push({
      title: $element.attr('title'),
      href: $element.attr('href'),
    })
  })

  return items
}

module.exports = cnode
