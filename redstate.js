const request = require('request');
const cheerio = require('cheerio');
const Metascraper = require('metascraper');
const Promise = require('bluebird');


// function get_blazeNewsUrls () {
  request('http://www.redstate.com/sections/front-page-stories/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      let $ = cheerio.load(html);

      let url = $('.container').find('#main').map((i, url) => {
        console.log('typeof this: ',  this.children);
        // console.log('url.children: ', url.children[i].next.children)
      // })children[1].attribs.href
      //   console.log('url.attribs.href: ', url.attribs.href);
      });

      // let url = $('.container').find('#main').children();


      // for(var i = 0; i < url.length; i++) {
      //   console.log('url[i]: ', url[i]);

      // }
    }
  });
// }


// function getArr (arr) {
//   Promise.map(arr, (blazeArr) => {
//     Metascraper
//       .scrapeUrl(blazeArr)
//       .then((metadata) => {
//         console.log('metadata: ', metadata);
//       })
//   })
// }

// get_blazeNewsUrls();

