// Youtube api key: AIzaSyDKUr7nLe1fsOaQt-1CtrPlujbMv4EWBEo
var state = {
  youtube_base_url: 'https://www.googleapis.com/youtube/v3/search',
  query: "",
  data: {},
  index: 0,
};

function getDataFromApi(state, callback) {
  var settings = {
    url: state.youtube_base_url,
     data: {
      q: state.query,
      r: 'json',
      part: 'snippet',
      key: 'AIzaSyDKUr7nLe1fsOaQt-1CtrPlujbMv4EWBEo',
      maxResults: 6,
     },
     dataType: 'json',
     type: 'GET',
     success: callback
  };
  
  state.data = $.ajax(settings);
};

function getMoreDataFromApi(state, callback) {
  var settings = {
    url: state.youtube_base_url,
     data: {
       q: state.query,
       pageToken: state.data.responseJSON.nextPageToken,
       r: 'json',
       part: 'snippet',
       key: 'AIzaSyDKUr7nLe1fsOaQt-1CtrPlujbMv4EWBEo',
       maxResults: 6,
    },
     dataType: 'json',
     type: 'GET',
     success: callback
   };
  state.data = $.ajax(settings);
}


function displayYoutubeSearchData(data) {
  var resultElement = '';
  if(data.items) {
    data.items.forEach(function(item) {
      resultElement += '<li><a class="fancybox" rel="group" href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src="' + item.snippet.thumbnails.default.url + '"/></a> <a class="more" href="https://www.youtube.com/channel/' + item.snippet.channelId + '">More from this channel</a></li>';
    });
  }
  else {
    resultElement += '<li>No results</li>';
  }
  // add more results button at end of results list
  resultElement += "<button type='submit' id='more'>More Results</button>"
  $('.js-results').html(resultElement);
};

function watchSubmit(state) {
  $('.js-youtube-query').submit(function(e) {
    e.preventDefault();
    state.query = $(this).find('.search-query').val();
    getDataFromApi(state, displayYoutubeSearchData);
    // $(".fancybox").fancybox();
    state.index++;
  });
};

$(function(){watchSubmit(state);});

$('.js-results').on('click', '#more', function(e) {
  e.preventDefault();
  getMoreDataFromApi(state, displayYoutubeSearchData);
  state.index++;
});