const request = require('request');
const cheerio = require('cheerio');
const dataStorage = require('./dataStorage');

request('https://www.washingtonpost.com/national/federal-agents-conduct-sweeping-immigration-enforcement-raids-in-at-least-6-states/2017/02/10/4b9f443a-efc8-11e6-b4ff-ac2cf509efe5_story.html', function (error, response, html) {
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
  dataStorage.getData();
});