// Youtube api key: AIzaSyDKUr7nLe1fsOaQt-1CtrPlujbMv4EWBEo

var youtube_base_url = 'https://www.googleapis.com/youtube/v3/search'
var data ={};

function getDataFromApi(searchTerm, callback) {
  console.log("getDataFromApi called");
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
      resultElement += '<li><a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src="' + item.snippet.thumbnails.default.url + '"></li>';
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
  });
};

$(function(){watchSubmit();});