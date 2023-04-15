AFRAME.registerComponent('youtube-browser', {
  schema: {
    apiKey: {type: 'string'},
    query: {type: 'string'}
  },

  init: function() {
    // Initialize your component here
  },

  searchYouTube: function(query) {
    // Search YouTube using the API
  },

  displayResults: function(data) {
    // Display the search results in A-Frame
  }
});

searchYouTube: function(query) {
  const apiKey = this.data.apiKey;

  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${AIzaSyAO7neJf6cMwHQNZoh86SKQFPU5ya05o6E}`)
    .then(response => response.json())
    .then(data => this.displayResults(data))
    .catch(error => console.error('Error fetching YouTube data:', error));
}
displayResults: function(data) {
  const el = this.el;
  el.innerHTML = ''; // Clear existing content

  data.items.forEach((item, index) => {
    const videoId = item.id.videoId;
    const title = item.snippet.title;
    const thumbnailUrl = item.snippet.thumbnails.default.url;

    const resultEl = document.createElement('a-entity');
    resultEl.setAttribute('geometry', {
      primitive: 'plane',
      width: 1,
      height: 0.6
    });
    resultEl.setAttribute('material', {src: thumbnailUrl, color: '#FFF'});
    resultEl.setAttribute('position', {x: index * 1.2, y: 1.5, z: -3});

    resultEl.addEventListener('click', () => {
      // Open the video on click
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    });

    el.appendChild(resultEl);
  });
}
