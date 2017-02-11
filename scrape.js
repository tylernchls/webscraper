const request = require('request');
const cheerio = require('cheerio');

request('https://news.ycombinator.com', function (error, response, html) {
  console.log('html: ', html);
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
      let comments = $(subtext).eq(5).text();

      let data = {
        rank: parseInt(rank),
        title,
        url,
        points: parseInt(points),
        userName,
        age,
        comments: parseInt(comments)
      };

      console.log('data: ', data);

    });
  }
});
