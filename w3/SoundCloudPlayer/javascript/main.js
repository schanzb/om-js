// Search





// Query Sound Cloud API


var SoundCloudAPI = {};

SoundCloudAPI.init = function(){
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
};

SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue){
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/tracks', {
        q: inputValue
    }).then(function(tracks) {
        console.log(tracks);
    });
};

SoundCloudAPI.getTrack("Rilo Kiley");


SoundCloudAPI.renderTracks = function() {
    // makes .card div
    var card = document.createElement('div');
    card.classList.add('card', 'card-js');

    var searchResults = document.querySelector('.js-search-results');
    searchResults.appendChild(card);


    // make .image div
    var image = document.createElement('div');
    image.classList.add('image-js');

    var cardDiv = document.querySelector('.card-js');
    cardDiv.appendChild(image);
    // put in image
    var imageDiv = document.querySelector('.image-js')
    imageDiv.innerHTML = "<img class='image_img' src='http://www.placekitten.com/290/290'>";


    // make .content div
    var content = document.createElement('div');
    content.classList.add('content', 'content-js');

    cardDiv.appendChild(content);

    
    // make .header div
    var header = document.createElement('div');
    header.classList.add('header', 'header-js');

    var contentDiv = document.querySelector('.content-js');
    contentDiv.appendChild(header);
    // put in title
    var headerDiv = document.querySelector('.header-js');
    headerDiv.innerHTML = '<a href="https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance" target="_blank">"Science Vs. Romance"</a>';


    // make add to playlist button
    var button = document.createElement('div');
    button.classList.add('ui', 'bottom' , 'attached' , 'button', 'js-button', 'button-js');

    cardDiv.appendChild(button);
    // add icon
    var buttonDiv = document.querySelector('.button-js');
    // var icon = document.createElement('i');
    // icon.classList.add('add icon');
    
    buttonDiv.innerHTML = '<i class="add icon"></i>';
    buttonDiv.innerHTML = '<span>Add to playlist</span>';


};
SoundCloudAPI.renderTracks();





// Display Cards








// Add to playlist and play