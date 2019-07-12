var fs = require("fs");

var axios = require('axios')

var arguments = process.argv;

require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
 
//var spotify = new Spotify({
  //id: <your spotify client id></your>
 // secret: <your spotify client secret></your>
//});

if(arguments[2] == "spotify-this-song"){
    spotify.search({ type: 'track', query: 'Mother Earth' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
      
}

if(arguments[2] == "concert-this"){

    var artist = "BANKS";

    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(queryURL).then(
    function(response) {  
       console.log(response.data[0]); 
  console.log(response.Runtime);
});
}
if(arguments[2] == "movie-this") {
    var title = "jawbreaker";

var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

axios.get(queryURL).then(
    function(response) {
      console.log(response);
  console.log(response.Runtime);
});
}
if(arguments[2] == "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
          }
        
        var dataArr = data.split(",");
        var command = dataArr [0]
        var search = dataArr [1]
        if (command == "spotify-this-song") {
            spotify.search({ type: 'track', query: search}, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
               
              console.log(data); 
              });
        if (command == "movie-this") {
            var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

            axios.get(queryURL).then(
                function(response) {
                  console.log(response);
              console.log(response.Runtime);
            }); 
        }
        }
        if (command == "concert-this") {
            var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

            axios.get(queryURL).then(
                function(response) {
                  console.log(response.data[0]);
              console.log(response.Runtime);
            });   
        }
}
 

    )}
