AFRAME.registerComponent("clickable", {
  init: function () {
    this.el.addEventListener("click", (evt) => {
      // The action you want to perform when the plane is clicked
      console.log("Clicked on:", this.el.getAttribute("id"));

      // Example: navigate to a different world/scene
      // location.href = 'path/to/your/destination/scene.html';
    });
  },
});
