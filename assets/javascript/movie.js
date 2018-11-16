

// var queryURL = "https://www.omdbapi.com/?t=beauty+and+the+beast&plot=short&apikey=de45c0f0";
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });

$(document).ready(function () {

   
  $("#submitMovie").on("click", function () {
      var movie = $("#movie").val().trim();
      var queryURL = "https://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=de45c0f0";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(data) {
        console.log(data);
        console.log(data.Title);
        console.log(data.Year);
        console.log(data.Actors);
        console.log(data.Awards);
        console.log(data.BoxOffice);
        console.log(data.MetaScore);
        console.log(data.Plot);
        console.log(data.Rated);
        console.log(data.Released);
        console.log(data.Runtime);
        console.log(data.Writer);
        console.log(data.Poster);
      });
  })
});