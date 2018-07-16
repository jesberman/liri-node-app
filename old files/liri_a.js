console.log(process.argv);

console.log("Wheatley");

require("dotenv").config();
var keys = require("./keys.js");

var request = require('request');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(
    keys.spotify
);


var client = new Twitter(
    keys.twitter
);

var argument = process.argv[2];



if (process.argv[2] === "my-tweets") {
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
    var song = process.argv.slice(3).join(" ");
    console.log(song);
    spotify.search({ type: 'track', limit: 1, query: song}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       console.log(data.tracks.href)
        console.log(data.tracks.items[0].artists[0].name);

        //console.log(JSON.stringify(data));
     // console.log(data); 
      });
      


}



else if (process.argv[2] === "movie-this") {
    request('http://www.omdbapi.com/?apikey=[c797a0d9]&t=big', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log(response.Title);
      //console.log('body:', body); // Print the HTML for the Google homepage.
    });
    


}



