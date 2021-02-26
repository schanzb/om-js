/*  1. Grab input */

// When go button is clicked
document.querySelector(".js-go").addEventListener('click',function(){
    var input = document.querySelector("input").value;
    pushToDOM(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

    var input = document.querySelector("input").value;

    //if ENTER is pressed
    if(e.which === 13){
        pushToDOM(input);
    }


});





/*  2. API stuff */


var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

    var data = e.target.response;
    pushToDOM(data);

});



/*  3. Show GIFs */


function pushToDOM(input) {

    var response = JSON.parse(input);
    // console.log(response);

    var imageUrls = response.data;
    // .images.fixed_height.url
    

    imageUrls.forEach(function(image){
        var src= image.images.fixed_height.url;
        console.log(src)

        var container = document.querySelector(".js-container");
        container.innerHTML += "<img src=" + src + " alt='gifs' class='container-image'>";
    });


    
  
  };