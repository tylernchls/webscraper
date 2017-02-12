const request = require('request');
const cheerio = require('cheerio');
const dataStorage = require('./dataStorage');

request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    let $ = cheerio.load(html);
    $('td.title').each((i, element) => {
      let a = $(element).find('a.storylink');
      let title = a.text();
      let rank = a.parent().parent().text();
      let url = a.attr('href');
      let subtext = a.parent().parent().next().children('.subtext').children();
      let points = $(subtext).eq(0).text();
      let userName = $(subtext).eq(1).text();
      let age = $(subtext).eq(2).text();

      let data = {
        rank: parseInt(rank),
        title,
        url,
        points: parseInt(points),
        userName,
        age
      };
      dataStorage.validate(data);

    });
  }
  dataStorage.getData();
});





