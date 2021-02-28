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
    card.classList.add('card');

    var searchResults = document.querySelector('.js-search-results');
    searchResults.appendChild(card);
};
SoundCloudAPI.renderTracks();





// Display Cards








// Add to playlist and play