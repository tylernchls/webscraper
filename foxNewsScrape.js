const request = require('request');
const cheerio = require('cheerio');
const dataStorage = require('./dataStorage');

request('http://www.foxnews.com/tech/2017/02/11/3-router-tweaks-to-speed-up-your-wi-fi.html', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    let $ = cheerio.load(html);
    let title = $('h1').text();

    //need to fix white spaces on author data
    let author = $('.article-info').find('p').children().text();
    let date = Date($('.publicdate[datetime]').text());
    let content = $('.article-text').children('p').text();
    console.log('content: ', content);

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