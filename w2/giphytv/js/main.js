    setInterval(function(){
        /* Get Gifs */
        var url = "http://tv.giphy.com/v1/gifs/tv?api_key=CW27AW0nlp5u0&tag=giphytv";

        // AJAX Request
        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open( 'GET', url );
        GiphyAJAXCall.send();

        GiphyAJAXCall.addEventListener('load',function(e){
            // console.log(e);
            var data = e.target.response;
            // console.log(data);
            var response = JSON.parse(data);
            console.log(response);
            getSrc(response);
        });


        var getSrc = function(a){
            var src = a.data.images.original.url;
            console.log(src);
            show(src);
        };

        var show = function(a){
            document.querySelector(".container").innerHTML = "<img src='" + a + "' alt='gif'>";
        };
    }, 1750);