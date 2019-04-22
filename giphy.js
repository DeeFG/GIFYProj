var topics = ["keto", "travel","patriots","slay","lemonade","money","laugh"];

Api Key:
tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy


for (var i=0; i< topics.length ;i++){
    $("<button>").appendTo(buttonarea); 
}

var topics = ["Flowers","Patriots","Slay","Lemonade","Money","Laugh"];
var queryURL = "https://api.giphy.com//v1/gifs/search?=" + topics[i] + "&api_key=" + APIkey + "&limit=10" ;
var APIkey = "tWQYz0gCQxDLPiDqZLzGWA4Qpb5NkuSy" ;
// https://developers.giphy.com/docs/#path--gifs-search



// click-json-solved.html
for (var i=0; i< topics.length ;i++){
   var newtopicbtn = $("<button>" + topics[i] +"</button>")
   $("#buttonarea").append(newtopicbtn); 
}


function displayGIFS() {


    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com//v1/gifs/search?=" + topics[i] + "&api_key=" + APIkey + "&limit=10" ;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#gifarea").text(JSON.stringify(response));
    });
}


