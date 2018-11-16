

var queryURL = "https://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=de45c0f0";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

$(document).ready(function () {

   
  $("#submitMoive").on("click", function () {
      var movie = $("#movie").val().trim();
      var queryURL = "https://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=de45c0f0";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
          reviewDiv = $("#movies-here")
      });
  })
})