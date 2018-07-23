


//connects liri.js to the .env file in the main folder
require("dotenv").config();

//creates a variable called keys and connects liri.js to the keys.js file
var keys = require("./keys.js");

//creates a variable called var request and connects it to the "request" file in the "node_modules" file
var request = require('request');

//creates a variable called var request and connects it to the "twitter" file in the "node_modules" file
var Twitter = require('twitter');

//creates a variable called var request and connects it to the "node-spotify-api" file in the "node_modules" file
var Spotify = require('node-spotify-api');
 
var fs = require('fs');
//creates a variable called spotify and sets it equal to a new instance of the spotify keys and secrets in the keys.js file
var spotify = new Spotify(
    keys.spotify
    
);

//creates a variable called client and sets it equal to a new instance of the twitter keys and secrets in the keys.js file
var client = new Twitter(
    keys.twitter
);

//creates a new variable called argument and sets it equal to the third response from process.argv
var argument = process.argv[2];




function twitter_command() {


    //creates a variable params and sets it equal to screen name of a twitter account
    var params = { screen_name: 'Wheatle30478487' };
    //tells the code to go to the client variable and "get" three properties: the "statuses/user_timeline, the params variable, and a function with the properties "error" "tweets" and "response"
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        //begins an if statement that activates in the event of an error
        if (!error) {
            //starts a for loop that runs for the full length of the tweets variable
            for (i = 0; i < tweets.length; i++) {
                //prints the text of each individual tweet that the for loop runs through
                console.log(tweets[i].text);

            }

        }
    })

}

function movie_command() {

    //creates a variable called film that equals everything in a user generated array from the 
    //fourth position to the end of the array.  Also, it "joins" the different elements of the array together with an empty space
    var film = process.argv.slice(3).join(" ");
    //sends an api request to the omdb website that specifies the film variable that the user entered.  Also begins a function
    request('http://www.omdbapi.com/?apikey=trilogy&t='+film, function (error, response, body) {
      
    // Print the error if one occurred
      console.log('error:', error); 

      // Print the response status code if a response was received
      console.log('statusCode:', response && response.statusCode); 

      //creates empty space between the last code and the next
       console.log(" ");

       //prints the title of the movie
        console.log("Movie Title: ");
        console.log(JSON.parse(body).Title);
        console.log(" ");

        //prints the year the movie was released
        console.log("Year of Release: ")
        console.log(JSON.parse(body).Year);
        console.log(" ");

        //prints the IMDB score the film received
        console.log("IMDB Score: ")
        console.log(JSON.parse(body).Ratings[0]);
        console.log(" ");

        //prints the Rotten Tomatoes score the film received
        console.log("Rotten Tomatoes Score: ")
        console.log(JSON.parse(body).Ratings[1]);
        console.log(" ");

        //prints the metacritic score the film received  
        console.log("Metacritic Score: ")
        console.log(JSON.parse(body).Ratings[2]);
        console.log(" ");

        //prints the name of the country the film was made in
        console.log("Country Produced: ")
        console.log(JSON.parse(body).Country);
        console.log(" ");

        //prints the language the film was made in   
        console.log("Language: ")
        console.log(JSON.parse(body).Language);
        console.log(" ");

        //prints a summary of the plot of the film
        console.log("Plot: ")
        console.log(JSON.parse(body).Plot);
        console.log(" ");

        //prints the names of some of the actors in the film
        console.log("Lead Actors: ")
        console.log(JSON.parse(body).Actors);
        console.log(" ");


    });

}


function spotify_command () {

    var random_text = process.argv.slice(3).join(" ");
    //tells the code to search the spotify variable for the parameters "type", "limit", and "query"
    spotify.search({ type: 'track', limit: 1, query: random_text}, function(err, data) {
        //begins an if statments in the event of an error response 
        if (err) {
          //returns a console.log that displays the type of error which occured if one did
          return console.log('Error occurred: ' + err);
        }
        //creates blank space between the previous response and the next one
        console.log(" ");

        //prints that artist's name
        console.log("Artist's Name: ");
        console.log(data.tracks.items[0].artists[0].name);
        console.log(" ");

        //prints that song name
        console.log("Song Name: ")
        console.log(data.tracks.items[0].name);
        console.log(" ");

        //prints that album name
        console.log("Album Name: ");
        console.log(data.tracks.items[0].album.name);
        console.log(" ");

        //prints a link to the song on spotify        
        console.log("Link to Song: ")
        console.log(data.tracks.items[0].external_urls.spotify);
        console.log(" ");

      });

}



//begins an if statement that runs when the user types into the node console "my-tweets"
if (process.argv[2] === "my-tweets") {
    twitter_command(); 
}

//begins an else if statement that activates if the user types in "spotify-this song"
else if (process.argv[2] === "spotify-this-song") {
    spotify_command();
    
}

//begins an else if statement that activates if the user types "movie-this"
else if (process.argv[2] === "movie-this") {
    
    movie_command();

}

else if (process.argv[2] === "do-what-it-says") {

    
    fs.readFile("random2.txt", "utf8", function(error, data) {

        var dataArray = data.split(",");

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log("Error: " +error);
        }
      //console.log("Data: " + data);
    
    
      var random_text = (dataArray[1]);
      console.log("var random_text: " + random_text);
      //var random_text = JSON.stringify(data);

      if(dataArray[0] === "my-tweets") {
        twitter_command();

      }

      else if ([0] === "spotify-this-song") {
          spotify_command();
      }
      //tells the code to search the spotify variable for the parameters "type", "limit", and "query"
      spotify.search({ type: 'track', limit: 1, query: random_text}, function(err, data) {

        //begins an if statments in the event of an error response 
          if (err) {
            //returns a console.log that displays the type of error which occured if one did
            return console.log('Error occurred: ' + err);
          }
          //creates blank space between the previous response and the next one
          console.log(" ");
  
          //prints that artist's name
          console.log("Artist's Name: ");
          console.log(data.tracks.items[0].artists[0].name);
          console.log(" ");
  
          //prints that song name
          console.log("Song Name: ")
          console.log(data.tracks.items[0].name);
          console.log(" ");
  
          //prints that album name
          console.log("Album Name: ");
          console.log(data.tracks.items[0].album.name);
          console.log(" ");
  
          //prints a link to the song on spotify        
          console.log("Link to Song: ")
          console.log(data.tracks.items[0].external_urls.spotify);
          console.log(" ");
  
        });
  
    //var command = " ";
    //$(command).val("random.txt");
    //console.log(command);




});


}









