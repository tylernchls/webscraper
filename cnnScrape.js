const request = require('request');
const cheerio = require('cheerio');
const dataStorage = require('./dataStorage');

request('http://money.cnn.com/2017/02/11/technology/turo-rent-tesla/index.html', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    let $ = cheerio.load(html);
    let title = $('.article-title').text();
    let author = $('.byline').text();
    let date = $('.cnnDateStamp').text();
    let content = $('#storytext').children('p').text();

    let data = {
      title,
      author,
      date,
      content
    }
    dataStorage.validate(data);
  }
  dataStorage.getData();
});

