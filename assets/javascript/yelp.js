var APIKey = "xzFW3uxT8Ov3zT9KNUNB1AEsl_64lTRsZ5upCl7wC5xnrZnHLFXt7tcohbD2vrGLXVVKmPP3woDyirasc6xktoFaDCcUxapP_65iAYmRF_INGxGdektwyptPsjTqW3Yx";
var clientID = "fAKzSCpALYlLdNzRhtVG8g";

$("#businesses-go-here.card-body").on("click",".text-center",function(){
    // console.log(typeof this.children[0].children[1])
    console.log(typeof this.children[0])
    
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

            var foodHtml = `<div class="col-md-4">
            <div class="dinnerCard card mb-4">
                <img class="card-img-top" src="${results[i].image_url}">
                <div class="card-header bg-dark text-info">                                        
                    <h5 class="card-title">${results[i].name}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text card-content">${results[i].location.address1 + " " + results[i].location.city + " " + results[i].location.zip_code}</p>
                    <p class="card-text card-content">${results[i].display_phone}</p>
                    <p class="card-text card-content">Rating: ${results[i].rating}/5</p>
                </div>
            </div>
        </div>`

            //    var wrapperDiv = $("<div class='text-center border border-dark mt-3 mb-3'></div>")
            //    var businessDiv = $("<div class='card'></div>");
            //    var bizRow = $("<div class='row'></div>")
            //    var imgDiv = $("<div class='col-lg-6'></div>");
            //    var infoDiv = $("<div class='col-lg-6'></div>");
            //    var name = $("<p></p>");
            //    var rating = $("<p></p>");
            //    var address = $("<p></p>");
            //    var businessImg = $("<img class='center-block'>");
            //    var phone = $("<p></p>");
            //    rating.text(`${results[i].rating}/5`);
            //    name.text(results[i].name);
            //    phone.text(results[i].display_phone);
            //    address.text(results[i].location.address1 + " " + results[i].location.city + " " + results[i].location.zip_code)

            //    businessImg.attr("style", "width: 250px; height: 250px; margin: auto;")
            //    businessImg.attr("src", results[i].image_url);
            //    infoDiv.append(name);
            //    infoDiv.append(address)
            //    infoDiv.append(phone);
            //    infoDiv.append("Rating: " , rating);
            //    imgDiv.append(businessImg);
            //    bizRow.append(imgDiv);
            //    bizRow.append(infoDiv);
            //    businessDiv.append(bizRow);
            //    wrapperDiv.append(businessDiv)
               $("#businesses-go-here").append(foodHtml);
           }

           // $("#reviews-go-here").append(result)
           // for(i = 0; i < result.length; i++) {
           //     reviewDiv = $("<div>");
           //     rating = $("<p>");
           //     reviewDiv.text(result.businesses);
           //     console.log(reviewDiv)
           // }
       });
       // Clear the text boxes after a search.
       $("#brewery").val("");
       $("#location").val("");
   })
})