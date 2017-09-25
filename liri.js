var twitter = require ("twitter");
var spotify = require ('spotify');
var request = require ('request');
// var twitterData = get(twitterKeys)
var nodeArgs = process.argv;

// function twitter(){
//     var params = {
//         screenname:
//     } && {
//         count:20
//     };
//     twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response)) {
//         if(!error) console.log(tweets);
//     }
// };

function spotify(result){
    spotify.search({type: 'track', query: song_name}, function(err, data){
        if (err) {
            console.log('Cannot complete request'+ err);
            return;
        }
        console.log (JSON.stringify(result))
    });
};
//movies

//var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

// $.ajax({
//     url: queryURL
//     method:'GET'
// }).done(function(response){
    
// })
console.log('success!');