
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

      var title = $("<a href='https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords="+data.Title+"' class='title'>").text(data.Title);
      movieDiv.append(title)

      var pOne = $("<div class='text'>").text("Rating: " + data.Rated);
      movieDiv.append(pOne);

      var pTwo = $("<div class='text'>").text("Released: " + data.Released);
      movieDiv.append(pTwo);

      var pThree = $("<div class='text'>").text("Plot: " + data.Plot);
      movieDiv.append(pThree);

      var pFour = $("<div class='text'>").text("Actors: "+ data.Actors);
      movieDiv.append(pFour);

      var pFive = $("<div class='text'>").text("Awards: "+ data.Awards);
      movieDiv.append(pFive);

      var pSix = $("<div class='text'>").text("Metascore: "+ data.Metascore);
      movieDiv.append(pSix);

      var pSeven = $("<a href='https://www.imdb.com/find?ref_=nv_sr_fn&q="+data.Title+"&s=all'>").text("IMDB Rating: "+ data.imdbRating);
      movieDiv.append(pSeven);

      var pEight = $("<div class='text'>").text("Runtime: "+ data.Runtime);
      movieDiv.append(pEight);

      var pNine = $("<div class='text'>").text("Writer: " + data.Writer);
      movieDiv.append(pNine);

      var image = $("<img class='img-fluid'>").attr("src", data.Poster);
      movieDiv.append(image);

      $("#movies-here").prepend(movieDiv);
      $("#movie").val("");
    });
  });
});