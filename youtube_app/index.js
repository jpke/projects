// Youtube api key: AIzaSyDKUr7nLe1fsOaQt-1CtrPlujbMv4EWBEo

var youtube_base_url = 'https://www.googleapis.com/youtube/v3/search'
var data ={};

function getDataFromApi(searchTerm, callback) {
  var settings = {
    url: youtube_base_url,
    data: {
      q: searchTerm,
      r: 'json',
      part: 'snippet',
      key: 'AIzaSyDKUr7nLe1fsOaQt-1CtrPlujbMv4EWBEo',
      maxResults: 10,
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  data = $.ajax(settings);
  $.ajax(settings);
};

function displayYoutubeSearchData(data) {
  var resultElement = '';
  if(data.items) {
    data.items.forEach(function(item) {
      resultElement += '<li><a class="fancybox" rel="group" href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src="' + item.snippet.thumbnails.default.url + '"/></a></li>';
    });
  }
  else {
    resultElement += '<li>No results</li>';
  }

  $('.js-results').html(resultElement);
};

function watchSubmit() {
  $('.js-youtube-query').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.search-query').val();
    getDataFromApi(query, displayYoutubeSearchData);
    $(".fancybox").fancybox();
  });
};

$(function(){watchSubmit();});

// $(document).ready(function() {
//   $(".fancybox").fancybox();
// });

// function onYouTubePlayerAPIReady() {
//     $(document).ready(function () {
//         $.fancybox({
//             href: "http://www.youtube.com/embed/L9szn1QQfas?enablejsapi=1&wmode=opaque&autoplay=1",
//             type: "iframe",
//             beforeShow: function () {
//                 // Find the iframe ID
//                 var id = $.fancybox.inner.find('iframe').attr('id');
//                 // Create video player object and add event listeners
//                 var player = new YT.Player(id, {
//                     events: {
//                         'onStateChange': function (event) {
//                             if (event.data === 0) {
//                                 $.fancybox.close();
//                             } // if
//                         } // onStateChange
//                     } // events
//                 }); // YT.Player
//             } // beforeShow
//         }); // fancybox
//     }); // ready
// } // onYouTubePlayerAPIReady