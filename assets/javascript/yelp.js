var APIKey = "xzFW3uxT8Ov3zT9KNUNB1AEsl_64lTRsZ5upCl7wC5xnrZnHLFXt7tcohbD2vrGLXVVKmPP3woDyirasc6xktoFaDCcUxapP_65iAYmRF_INGxGdektwyptPsjTqW3Yx";
var clientID = "fAKzSCpALYlLdNzRhtVG8g";


$(document).ready(function () {

   
    $("#submit").on("click", function () {
        var brewery = $("#brewery").val().trim();
        var queryURL = "https://api.yelp.com/v3/businesses/search?q=" + brewery + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            result = response.data;
            console.log(result)
            reviewDiv = $("#reviews-go-here")
        });
    })
})