const request = require('request');
const cheerio = require('cheerio');
const dataStorage = require('./dataStorage');

request('https://www.washingtonpost.com/news/innovations/wp/2017/02/10/ford-to-invest-1-billion-in-artificial-intelligence-for-your-car/?utm_term=.4efc72ece5bf', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    let $ = cheerio.load(html);
    let title = $('h1').text();
    let author = $('span[itemprop="name"]').text();
    let date = Date($('.pb-timestamp[content]').attr('content'));
    let content = $('article[itemprop="articleBody"]').children('p').text();

    let data = {
      title,
      author,
      date,
      content
    }
    dataStorage.validate(data);
  }
  console.log(dataStorage.getData());
});