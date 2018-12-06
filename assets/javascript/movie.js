
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
      var movieHtml=`<div class="col-lg-4">
      <div class="card movieCard">
          <div class="card-header headText text-white bg-dark">                   
              <a href="https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&amp;field-keywords=Hulk" class="title text-info">
                  <h5 class="card-title">${data.Title}</h5>
              </a>
          </div>
          <div class="card-body">
              <p class="card-text"><strong>Rating:</strong> ${data.Rated}</p>
              <p class="card-text"><strong>Released:</strong> ${data.Released}</p>
              <p class="card-text"><strong>Plot:</strong> ${data.Plot}</p>
              <p class="card-text"><strong>Actors:</strong> ${data.Actors}</p>
              <p class="card-text"><strong>Awards:</strong> ${data.Awards}</p>
              <p class="card-text"><strong>Metascore:</strong> ${data.Metascore}</p>
              <a href="https://www.imdb.com/find?ref_=nv_sr_fn&amp;q=" hulk'&s="all'">
                  <p class="card-text"><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
              </a>
              <p class="card-text"><strong>Runtime:</strong> ${data.Runtime}</p>
              <p class="card-text"><strong>Writer:</strong> ${data.Writer}</p>
          </div>
          <img class="card-img-bottom" src=${data.Poster}>
      </div>
  </div>`

      $("#movies-here").prepend(movieHtml);
      $("#movie").val("");
    });
  });
});