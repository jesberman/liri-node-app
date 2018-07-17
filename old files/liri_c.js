//console.log(process.argv);

//console.log("Wheatley");

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
    //console.log(song);
    spotify.search({ type: 'track', limit: 1, query: song}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       //console.log(data.tracks.href)
       console.log(" ");

       console.log("Artist's Name: ");
        console.log(data.tracks.items[0].artists[0].name);
        console.log(" ");

        console.log("Song Name: ")
        console.log(data.tracks.items[0].name);
        console.log(" ");

        console.log("Album Name: ");
        console.log(data.tracks.items[0].album.name);
        console.log(" ");

        console.log("Link to Song: ")
        console.log(data.tracks.items[0].external_urls.spotify);
        console.log(" ");


       // console.log(data.tracks.items[0]);


        //console.log(JSON.stringify(data));
     // console.log(data); 
      });
      


}


//begins an else if statement that activates if the user types "movie-this"
else if (process.argv[2] === "movie-this") {
    //creates a variable called film that equals everything in a user generated array from the 
    //fourth position to the end of the array.  Also, it "joins" the different elements of the array together with an empty space
    var film = process.argv.slice(3).join(" ");
    //sends an api request to the omdb website that specifies the film variable that the user entered.  Also begins a function
    request('http://www.omdbapi.com/?apikey=trilogy&t='+film, function (error, response, body) {
      // Print the error if one occurred
      console.log('error:', error); 
    // Print the response status code if a response was received
      console.log('statusCode:', response && response.statusCode); 
      //console.log(response.Title);
      //console.log('body:', body); // Print the HTML for the Google homepage.
       // console.log(response);
       console.log(" ");

        console.log("Movie Title: ")
        console.log(JSON.parse(body).Title);
        console.log(" ");

        console.log("Year of Release: ")
        console.log(JSON.parse(body).Year);
        console.log(" ");

        console.log("IMDB Score: ")
        console.log(JSON.parse(body).Ratings[0]);
        console.log(" ");

        console.log("Rotten Tomatoes Score: ")
        console.log(JSON.parse(body).Ratings[1]);
        console.log(" ");

        console.log("Metacritic Score: ")
        console.log(JSON.parse(body).Ratings[2]);
        console.log(" ");

        console.log("Country Produced: ")
        console.log(JSON.parse(body).Country);
        console.log(" ");

        console.log("Language: ")
        console.log(JSON.parse(body).Language);
        console.log(" ");

        console.log("Plot: ")
        console.log(JSON.parse(body).Plot);
        console.log(" ");

        console.log("Lead Actors: ")
        console.log(JSON.parse(body).Actors);
        console.log(" ");


    });
    


}



