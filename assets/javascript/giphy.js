var topics = ["unicorns", "firework", "dance", "bling"];
var APIkey = "tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy";


for (var i = 0; i < topics.length; i++) {

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics[i] + "&api_key=tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // display image
        var imgURL = response.data[i].images.fixed_width.url;
        var image = $("<img>").attr("src", imgURL);
        $("#gifarea").append(image);
        /// display rating
        var rating = response.data[i].rating;
        var ratingDiv = $("<div>").attr("id", rating);
        ratingDiv.text(rating);
        $("#gifarea").append("Rated:" + rating)

        console.log(response);

    });

    //creates original buttons
    var newtopicbtn = $("<button >" + topics + "</button>")
    newtopicbtn.addClass("gif");
    newtopicbtn.attr("data-topic", topics[i]);
    newtopicbtn.text(topics[i]);
    $("#buttonarea").append(newtopicbtn);

}
//  submit button used to add buttons 
$("#addInput").on("click", function (event) {
    event.preventDefault();
    //take input  and turn it into a button
    var topic = $("#userInput").val();
    //adds input to array
    topics.push(topic);
    // adds button of input to page
    var topicsAdded = $("<button >" + topic + "</button>")
    topicsAdded.addClass("gif");
    topicsAdded.attr("data-topic", topic[i]);
    topicsAdded.text(topic[i]);
    $("#buttonarea").append(topicsAdded);
    // clears out search box
    $("#userInput").val("");
});


// click to search attr of created button

$("#buttonarea").on("click", function (response) { 
   
    var clickedbtn = $(this).attr("data-topic");
    /// clear current gifs
    event.preventDefault();
    $("#gifarea").append();
    $("#gifarea").append();

     console.log("clicked")

// run val for" this ""
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            clickedbtn + "&api_key=tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // display image
            var imgURL = response.data[i].images.fixed_width.url;
            var image = $("<img>").attr("src", imgURL);
            $("#gifarea").append(image);
            /// display rating
            var rating = response.data[i].rating;
            var ratingDiv = $("<div>").attr("id", rating);
            ratingDiv.text(rating);
            $("#gifarea").append("Rated:" + rating)

            console.log(response);
        });

   // }
});



// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {


    // $("#buttonarea").on("click", function (response) {
    //     console.log("clicked")
    //     var clickedbtn = $(this).attr("data-topic");
    //     // var filter = topics.filter(topics === clickedbtn );
    //     console.log(clickedbtn)


    //     //running api with attr value
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //         topics[i] + "&api_key=tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy&limit=10";
    //     // call ajax for specific topic when button pressed
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {

            // pull 10 images
            //put mage on screen
            // var imgURL = response.data[i].images.fixed_width.url;
            // var image = $("<img>").attr("src", imgURL);
            // $("#gifarea").append(image);

//         });
//     });
// });

// function displayGIFS() {

// var addTopicButton = $(this).attr("data-topic")


//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {


//         $("#gifarea").html
//         console.log(JSON.stringify(response));

//     });

// }


// $("#button-addon2").on("click", function (event) {
//     //event.preventDefualt();

//     var topic = $("#form-control").val().trim();

//     topics.push(topic);
//     console.log(topic);

//     getBtn();

// });






// // https://developers.giphy.com/docs/#path--gifs-search

// // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// // Under every gif, display its rating (PG, G, so on).

// // This data is provided by the GIPHY API.
// // Only once you get images displaying with button presses should you move on to the next step.
// // Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// // Deploy your assignment to Github Pages.

// // Rejoice! You just made something really cool.
