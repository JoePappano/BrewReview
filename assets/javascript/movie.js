
// basic API call:
// var queryURL = "https://www.omdbapi.com/?t=beauty+and+the+beast&plot=short&apikey=de45c0f0";
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });

$(document).ready(function () {
   
  $("#submitMovie").on("click", function () {
    event.preventDefault();
    var movie = $("#movie").val().trim();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=de45c0f0";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(data) {

      var movieDiv = $("<div class='card col-lg-4'>");

      var title = $("<h1 class='title'>").text(data.Title);
      movieDiv.append(title)

      var pOne = $("<p>").text("Rating: " + data.Rated);
      movieDiv.append(pOne);

      var pTwo = $("<p>").text("Released: " + data.Released);
      movieDiv.append(pTwo);

      var pThree = $("<p>").text("Plot: " + data.Plot);
      movieDiv.append(pThree);

      var pFour = $("<p>").text("Actors: "+ data.Actors);
      movieDiv.append(pFour);

      var pFive = $("<p>").text("Awards: "+ data.Awards);
      movieDiv.append(pFive);

      var pSix = $("<p>").text("Metascore: "+ data.Metascore);
      movieDiv.append(pSix);

      var pSeven = $("<p>").text("IMDB Rating: "+ data.imdbRating);
      movieDiv.append(pSeven);

      var pEight = $("<p>").text("Runtime: "+ data.Runtime);
      movieDiv.append(pEight);

      var pNine = $("<p>").text("Writer: " + data.Writer);
      movieDiv.append(pEight);

      var image = $("<img>").attr("src", data.Poster);
      movieDiv.append(image);

      $("#movies-here").prepend(movieDiv);

    });
  });
});