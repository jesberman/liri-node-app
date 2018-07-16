console.log("Wheatley");

require("dotenv").config();
///var keys = require("./keys.js");


var Twitter = require('twitter');

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});


var client = new Twitter(
    keys.twitter
);

var argument = process.argv[2];



if (process.argv[2] === "mytweets") {
    var params = { screen_name: 'Wheatle30478487' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);

            }

        }
    })
}

else if (process.argv[2] === "spotify-this-song") {
    spotify.search({ type: 'track', query: process.argv[3]}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
      

}





