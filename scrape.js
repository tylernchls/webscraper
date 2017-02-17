const request = require('request');
const cheerio = require('cheerio');
const dataStorage = require('./dataStorage');
const MetaInspector = require('meta-scrape');

//will scrape any meta data for any url
let client = new MetaInspector("http://www.espn.com/nba/story/_/id/18700455/shane-battier-named-miami-heat-director-basketball-development-analytics", {});

client.on("fetch", function(){
    console.log("keywords: " + client.keywords);

});

client.on("error", function(err){
    console.log(error);
});

client.fetch();torage.getData();
});





