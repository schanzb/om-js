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







/*  3. Show GIFs */


function pushToDOM(input) {

    var container = document.querySelector(".js-container");
    container.innerHTML = input;
  
  }