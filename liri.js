var fs = require("fs");
 
var axios = require('axios')

var arguments = process.argv[2];

require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
 
//var spotify = new Spotify({
  //id: <your spotify client id></your>
 // secret: <your spotify client secret></your>
//});
//process.argv
if(arguments == "spotify-this-song"){
    spotify.search({ type: 'track', query: 'Waiting Game' })
      .then(function(response) {
        //console.log(response) ;
        console.log("****") ;
        //console.log(response.tracks) ;
        //console.log(response.tracks.items);
        console.log(response.tracks.items[0].name);
        console.log(response.tracks.items[0].artists[0].name);
        console.log(response.tracks.items[0].album.name);
        console.log(response.tracks.items[0].preview_url);
      })
      
    .catch(function (err) {
      console.log(err);
    })
      
}

if(arguments == "concert-this"){

    var artist = "BANKS";

    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

axios.get(queryURL).then(
    function(response) {  
       console.log(response.data[1].datetime); 
       console.log(response.data[1].venue.name);
       console.log(response.data[1].venue.city);
       console.log(response.data[1].venue.country);
  console.log(response.Runtime);
});
}
if(arguments == "movie-this") {
    var title = "jawbreaker";

var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

axios.get(queryURL).then(
    function(response) {
      console.log(response.data.Title);
      console.log(response.data.Year);
      console.log(response.data.imdbRating);
      console.log(response.data.Ratings[1].Source);
      console.log(response.data.Ratings[1].Value);
      console.log(response.data.Country);
      console.log(response.data.Language);
      console.log(response.data.Plot);
      console.log(response.data.Actors);
  console.log(response.Runtime);
});
}
if(arguments == "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
          }
        
        var dataArr = data.split(",");
        console.log(dataArr.length);
        var command = dataArr [0]
        var search = dataArr [1]
        console.log(search);
        if(command == "spotify-this-song"){
         spotify.search({ type: 'track', query: search })
           .then(function(response) {
              //console.log(response) ;
              //console.log("****") ;
              //console.log(response.tracks) ;
              //console.log(response.tracks.items);
              console.log(response.tracks.items[0].name);
              console.log(response.tracks.items[0].artists[0].name);
              console.log(response.tracks.items[0].album.name);
              console.log(response.tracks.items[0].preview_url);
            })
            
          .catch(function (err) {
            console.log(err);
          })
            
      }
      
     if(command == "movie-this") {
        var title = search;
    
    var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";
    
    axios.get(queryURL).then(
        function(response) {
          console.log(response.data.Title);
          console.log(response.data.Year);
          console.log(response.data.imdbRating);
          console.log(response.data.Ratings[1].Source);
          console.log(response.data.Ratings[1].Value);
          console.log(response.data.Country);
          console.log(response.data.Language);
          console.log(response.data.Plot);
          console.log(response.data.Actors);
      console.log(response.Runtime);
    });
    }

        
       if(command == "concert-this"){

          var artist = search;
      
          var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
      
      axios.get(queryURL).then(
          function(response) {  
             console.log(response.data[1].datetime); 
             console.log(response.data[1].venue.name);
             console.log(response.data[1].venue.city);
             console.log(response.data[1].venue.country);
        console.log(response.Runtime);
      });
      }
}
 

    )}
