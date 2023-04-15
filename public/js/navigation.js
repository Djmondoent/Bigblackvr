const iframeIDs = [
  "mindfullbliss",
  "moonworld",
  "artworld",
  "loobyworld",
  "riptakeoffworld",
  "matrixworld",
  "bitcoinworld",
];

const iframes = {};
iframeIDs.forEach((id) => {
  iframes[id] = document.getElementById(id);
});

let currentScene = null;

function switchScene(sceneName) {
  if (currentScene !== sceneName) {
    if (currentScene) {
      iframes[currentScene].style.display = "none";
    }

    if (!iframes[sceneName].src) {
      iframes[sceneName].src = sceneName + ".html";
    }

    iframes[sceneName].style.display = "block";
    currentScene = sceneName;
  }
}
