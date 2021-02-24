/*  1. Grab input */


document.querySelector(".js-go").addEventListener('click',function(){
    var input = document.querySelector("input");
    pushToDOM(input.value)

});





/*  2. API stuff */







/*  3. Show GIFs */


var pushToDOM = function(gifs){
    var jsContainer = document.querySelector(".js-container")
    jsContainer.innerHTML = gifs


}