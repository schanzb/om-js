// Search
var UI = {};




UI.EnterPress = function(){
    var searhBar = document.querySelector('.js-search');

    searhBar.addEventListener('keyup', function(e){

        if(e.which === 13){
        
            var input = e.target.value;
            SoundCloudAPI.getTrack(input);
        }
    });
};


UI.SubmitClick = function(){
    

    var searchButton = document.querySelector('.js-submit');
    searchButton.addEventListener('click', function(){
        var input = document.querySelector('.js-search').value;
        console.log(input);
        SoundCloudAPI.getTrack(input);
    });
    



};


UI.SavePlaylist = function(){
    document.querySelector('.js-save').addEventListener('click', function(){
        var playlistName = prompt('Enter Playlist Name(case sensitive)')

        var sideBar = document.querySelector('.js-playlist');

        localStorage.setItem(playlistName, sideBar.innerHTML)


    });
};


UI.LoadPlaylist = function(){
    document.querySelector('.js-load').addEventListener('click', function(){
        var playlistName = prompt('Enter Playlist Name(case sensitive)')

        var sideBar = document.querySelector('.js-playlist');

        var playlist = localStorage.getItem(playlistName, sideBar.innerHTML)
        sideBar.innerHTML = playlist


    });
};



UI.clearPlaylist = function(){
    document.querySelector('.js-clear').addEventListener('click', function(){
        localStorage.removeItem('key');

        var sideBar = document.querySelector('.js-playlist');
        sideBar.innerHTML = "";
    });
};


UI.EnterPress();
UI.SubmitClick();
UI.clearPlaylist();
UI.SavePlaylist();
UI.LoadPlaylist();







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
        // console.log(tracks);

        var searchResult = document.querySelector('.js-search-results');
            searchResult.innerHTML= "";
        
        SoundCloudAPI.renderTracks(tracks, searchResult);
    });
};

// SoundCloudAPI.getTrack("Rilo Kiley");

// Display Cards

SoundCloudAPI.renderTracks = function(tracks, searchResult) {

    tracks.forEach(function(track){
        // card
        var card = document.createElement('div');
        card.classList.add('card');

        // make .image div
        var imageDiv = document.createElement('div');
        imageDiv.classList.add('image');

        var image_img = document.createElement('img');
        image_img.classList.add('image_img');
        image_img.src = track.artwork_url || 'http://lorempixel.com/200/200/abstract/';

        imageDiv.appendChild(image_img);


        // content
        var content = document.createElement('div');
        content.classList.add('content');

        var header = document.createElement('div');
        header.classList.add('header');
        header.innerHTML = '<a href="' + track.permalink_url + '" target="_blank">"' + track.title + '"</a>';

        // button
        var button = document.createElement('div');
        button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

        var icon = document.createElement('i');
        icon.classList.add('add', 'icon');

        var buttonText = document.createElement('span');
        buttonText.innerHTML = 'Add to Playlist';

        //apendChild
        content.appendChild(header);

        button.appendChild(icon);
        button.appendChild(buttonText);

        button.addEventListener('click', function(){
            SoundCloudAPI.getEmbed(track.permalink_url);
        });

        card.appendChild(imageDiv);
        card.appendChild(content);
        card.appendChild(button);


        searchResult.appendChild(card);
    });

};


SoundCloudAPI.getEmbed = function(trackURL){
    SC.oEmbed(trackURL, {
        auto_play: false
      }).then(function(embed){
        // console.log('oEmbed response: ', embed);
      
        var sideBar = document.querySelector('.js-playlist');
        
        

        var box = document.createElement('div');
        box.innerHTML = embed.html; 
        sideBar.insertBefore(box, sideBar.firstChild);
        localStorage.setItem('key', sideBar.innerHTML);


      });
};
var sideBar = document.querySelector('.js-playlist');
sideBar.innerHTML = localStorage.getItem("key");