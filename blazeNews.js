const request = require('request');
const cheerio = require('cheerio');
const Metascraper = require('metascraper');
const Promise = require('bluebird');

let blazeUrls = [];

function get_blazeNewsUrls () {
  request('http://www.theblaze.com/news', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      let $ = cheerio.load(html);

      let url = $('.main-content').children().children().find('.feed-link');

      for(var i = 0; i < url.length; i++) {
        let newUrl = "http://www.theblaze.com" + url[i].attribs.href;
        blazeUrls.push(newUrl);
      }
      getArr(blazeUrls);
    }
  });
}

function getArr (arr) {
  Promise.map(arr, (blazeArr) => {
    Metascraper
      .scrapeUrl(blazeArr)
      .then((metadata) => {
        console.log('metadata: ', metadata);
      })
  })
}

get_blazeNewsUrls();




