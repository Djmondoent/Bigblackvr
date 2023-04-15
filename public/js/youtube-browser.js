AFRAME.registerComponent("youtube-browser", {
  schema: {
    apiKey: { type: "string" },
    query: { type: "string" },
  },

  init: function () {
    this.searchYouTube(this.data.query);
  },

  searchYouTube: function (query) {
    const apiKey = this.data.apiKey;

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${AIzaSyAO7neJf6cMwHQNZoh86SKQFPU5ya05o6E}`
    )
      .then((response) => response.json())
      .then((data) => this.displayResults(data))
      .catch((error) => console.error("Error fetching YouTube data:", error));
  },

  displayResults: function (data) {
    const el = this.el;
    el.innerHTML = ""; // Clear existing content

    data.items.forEach((item, index) => {
      const videoId = item.id.videoId;
      const title = item.snippet.title;
      const thumbnailUrl = item.snippet.thumbnails.default.url;

      const resultEl = document.createElement("a-plane");
      resultEl.setAttribute("width", 0.5);
      resultEl.setAttribute("height", 0.3);
      resultEl.setAttribute("material", { src: thumbnailUrl, color: "#FFF" });
      resultEl.setAttribute("position", { x: -4 + index * 0.6, y: 1.5, z: -3 });
      resultEl.setAttribute("class", "clickable"); // Add a class for the raycaster

      resultEl.addEventListener("click", () => {
        // Play the video inside the A-Frame scene
        this.playVideo(videoId);
      });

      el.appendChild(resultEl);
    });
  },

  playVideo: function (videoId) {
    const videoEl = document.querySelector("#videoPlayer");
    videoEl.setAttribute(
      "src",
      `https://www.youtube.com/embed/${videoId}?autoplay=1`
    );
  },
});
