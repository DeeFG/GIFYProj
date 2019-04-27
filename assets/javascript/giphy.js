var topics = ["Dance", "Unicorns", "Cotton Candy"];
var APIkey = "tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy";


for (var i = 0; i < topics.length; i++) {
    //creates original buttons
    var newtopicbtn = $("<button >" + topics + "</button>")
    newtopicbtn.addClass("searchGif");
    newtopicbtn.attr("data-topic", topics[i]);
    newtopicbtn.text(topics[i]);
    $("#buttonarea").append(newtopicbtn);

}

//  submit button used to add buttons 
$("#addInput").on("click", function (event) {
    event.preventDefault();

    var topic = $("#userInput").val().trim();


    if (topic === "") {
        alert('You can only get GiFY with a topic');
        return false;
    }

    //take input  and turn it into a button
    //adds input to array
    topics.push(topic);
    // adds button of input to page
    var topicsAdded = $("<button >" + topic + "</button>")
    topicsAdded.addClass("searchGif");
    topicsAdded.attr("data-topic", topic);
    topicsAdded.text(topic);
    $("#buttonarea").append(topicsAdded);
    // clears out search box
    $("#userInput").val("").trim();

});

// click to search attr of created button

$("#buttonarea").on("click", ".searchGif", function () {

    var clickedbtn = $(this).attr("data-topic")/// clear current gifs ????
    console.log(clickedbtn)

    $("#gifarea").empty();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + clickedbtn + "&api_key=tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)
        for (var i = 0; i < response.data.length; i++) {

            if (response.data[i].images.downsized.height > 400) {
                ///  add if images bigger heigh > 300 disreGARD ????
                // return newresult;

                console.log(" too big");
            }

            var imgURL = response.data[i].images.fixed_width_still.url;
            var image = $("<img>").attr("src", imgURL);
            image.addClass("gif");
            image.attr("data-still", response.data[i].images.fixed_width_still.url)
            image.attr("data-anim", response.data[i].images.fixed_width.url)
            $("#gifarea").append(image);

            /// display rating
            var rating = response.data[i].rating;
            var ratingDiv = $("<div>").attr("id", rating);
            ratingDiv.addClass("rateingClass");
            ratingDiv.html(rating);
            $("#gifarea").append(ratingDiv);



        }
    })
});



$("#gifarea").on("click", ".gif", function () {
    console.log(this)
    var animUrl = $(this).attr("data-anim")
    var stillUrl = $(this).attr("data-still")
    var showsImg = $(this).attr("src")

    if (animUrl === showsImg) {
        console.log("Image is animated, make still")
        $(this).attr("src", stillUrl)
    } else {
        console.log("image is still, make animated")
        $(this).attr("src", animUrl)
    }
})

