var queryURL = "https://sandbox-api.brewerydb.com/v2/" + brewery + "?app_id=fae4e5dec30e8ac921aea3b07f1315d7";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});