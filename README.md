This application is designed to submit an api request for information from another website.  There are currently four commands that the program will respond to:

1.  Typing in the terminal "node liri.js my-tweets" will pull the latest tweets from a specific twitter account and print them.

2.  Typing in the terminal "node liri.js spotify-this-song" and then typing the name of a specific song will tell the program to pull relevant information about that song from the spotify api.  For instance, typing in  "node liri.js spotify-this-song hey jude" will pull up relevant info on this Beatles song.

3.  Typing in the terminal "node liri.js movie-this" and then typing in the name of a specific movie will tell the program to pull relevant information about that film from the omdb api.  For instance, typing in "node liri.js movie-this the lion in winter" will pull up relevant info on this Peter O'toole/Katherine Hepburn movie.

4.  Typing in the terminal "node liri.js do-what-it-says" will form different commands depending the state of line 149 of the current javascript code.  If the program is instructed to read the file "random.text", it will pull up information on a song written by the Backstreet Boys.  If the program is instructed to read the file "random1.text", it will instead pull the latest tweets from the above mentioned twitter account.  Finally, if the program is instructed to read the file "random2.text", it will pull up relevant information on the film "Titanic."