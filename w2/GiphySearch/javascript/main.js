
/*  1. Grab input */

// When go button is clicked
document.querySelector(".js-go").addEventListener('click',function(){
    var input = document.querySelector("input").value;
    makeUrlReady(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

    var input = document.querySelector("input").value;
    
    //if ENTER is pressed
    if(e.which === 13){
        makeUrlReady(input);
        // console.log(input);
    }


});





/*  2. API stuff */

function makeUrlReady(input){
    var replaced = input.replace(/ /g, '+'); //reaplces spaces with +
    urlReady(replaced);
};

function urlReady(a){
    var url = "https://api.giphy.com/v1/gifs/search?q="+ a + "&api_key=dc6zaTOxFJmzC";

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){

        var data = e.target.response;
        pushToDOM(data);

    });


};



/*  3. Show GIFs */


function pushToDOM(input) {

    var response = JSON.parse(input);
      //console.log(response);

    var imageUrls = response.data;
    var container = document.querySelector(".js-container");

    imageUrls.forEach(function(image){


        var src= image.images.fixed_height.url;
        //console.log(src)
        container.innerHTML += "<img src=" + src + " alt='gifs' class='container-image'>";
    });

};

/* var x;
for(x = 0; x < 20; x++){
    setTimeout(function(){
        var box = document.createElement('div');
        box.className='box';
        document.getElementById('container').appendChild(box);
    },250 * x)
} */