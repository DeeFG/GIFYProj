var topics = ["Flowers","Patriots","Slay","Lemonade","Money","Laugh"];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics + "&api_key=tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy&limit=10";
// var queryURL = "https://api.giphy.com//v1/gifs/search?q=" + topics[i] + "&api_key=tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy&limit=10" ;
// var APIkey = "tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy" ;


 $("#buttonarea").empty();

    for (var i = 0; i < topics.length; i++) {
        var newtopicbtn = $("<button >" + topics[i] + "</button>")
        newtopicbtn.addClass("gif");
        newtopicbtn.attr("data-topic", topics[i]);
        newtopicbtn.text(topics[i]);
        $("#buttonarea").append(newtopicbtn);
     displayGIFS();
    }

function displayGIFS() {
    newtopicbtn = $(this).attr("data-topic");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#gifarea").html(JSON.stringify(response.data));

//         $('#img').html('<img src="http://www.site.com/' + $(this).val() + '.jpg"
// width = "200px" > ');
//         $('#img').hide().fadeIn('slow');

        console.log(response.data[type])
        console.log(response.url)
        console.log()



    });
}


$("#button-addon2").on("click", function(event){
    //event.preventDefualt();

    var topic = $("#form-control").val().trim();
    topics.push(topic);
    console.log(movies);

    getBtn();

});











// https://developers.giphy.com/docs/#path--gifs-search

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// Deploy your assignment to Github Pages.

// Rejoice! You just made something really cool.

