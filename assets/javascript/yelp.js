var APIKey = "xzFW3uxT8Ov3zT9KNUNB1AEsl_64lTRsZ5upCl7wC5xnrZnHLFXt7tcohbD2vrGLXVVKmPP3woDyirasc6xktoFaDCcUxapP_65iAYmRF_INGxGdektwyptPsjTqW3Yx";
var clientID = "fAKzSCpALYlLdNzRhtVG8g";

$("#businesses-go-here.card-body").on("click",".text-center",function(){
    // console.log(typeof this.children[0].children[1])
    console.log(typeof this.children[0])
    var config
    

})

$(document).ready(function () {


   
    $("#submit").on("click", function () {
        var brewery = $("#brewery").val().trim();
        var location = $("#location").val().trim();
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + brewery + "&location=" + location;
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                'Authorization': 'Bearer xzFW3uxT8Ov3zT9KNUNB1AEsl_64lTRsZ5upCl7wC5xnrZnHLFXt7tcohbD2vrGLXVVKmPP3woDyirasc6xktoFaDCcUxapP_65iAYmRF_INGxGdektwyptPsjTqW3Yx'
            }
            // Authorization: "Bearer xzFW3uxT8Ov3zT9KNUNB1AEsl_64lTRsZ5upCl7wC5xnrZnHLFXt7tcohbD2vrGLXVVKmPP3woDyirasc6xktoFaDCcUxapP_65iAYmRF_INGxGdektwyptPsjTqW3Yx"
        }).then(function(response) {
            results = response.businesses;
            console.log(results)
            for(i = 0; i < results.length; i++) {
                var wrapperDiv = $("<div class='text-center'></div>")
                var businessDiv = $("<div class='card'></div>");
                var name = $("<p></p>");
                var rating = $("<p></p>");
                var address = $("<p></p>");
                var businessImg = $("<img class='center-block'>");
                var phone = $("<p></p>");
                rating.text(`${results[i].rating}/5`);
                name.text(results[i].name);
                phone.text(results[i].display_phone);
                address.text(results[i].location.address1 + " " + results[i].location.city + " " + results[i].location.zip_code)
                businessImg.attr("style", "width: 200px; height: 200px; margin: auto;")
                businessImg.attr("src", results[i].image_url);
                businessDiv.append(name);
                businessDiv.append(address)
                businessDiv.append(phone);
                businessDiv.append("Rating: " , rating);
                businessDiv.append(businessImg);
                wrapperDiv.append(businessDiv)
                $("#businesses-go-here").append(wrapperDiv);
            }

            // $("#reviews-go-here").append(result)
            // for(i = 0; i < result.length; i++) {
            //     reviewDiv = $("<div>");
            //     rating = $("<p>");
            //     reviewDiv.text(result.businesses);
            //     console.log(reviewDiv)
            // }
        });
    })
})