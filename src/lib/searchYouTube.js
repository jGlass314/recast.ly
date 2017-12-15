var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      maxResults: options.max,
      part: 'snippet',
      q: options.query, //whatever the text on that search field is
      type: 'video',
      key: options.key 
    },
    type: 'GET',
    success: function(data) {
      callback(data.items);
    },
    error: function(data) {
      console.error('error', data);
    }
  });
};

window.searchYouTube = searchYouTube;
