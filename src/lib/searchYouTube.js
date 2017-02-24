var searchYouTube = (options, callback) => {
  // TODO
  // console.log("options", options);
  // console.log("callback", callback);

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true
    },
    contentType: 'application/json',
    success: function (response) {
      // console.log('this is the ajax request', response);
      callback(response.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('failed to retrieve the data', data);
    }
  });
};

window.searchYouTube = searchYouTube;
