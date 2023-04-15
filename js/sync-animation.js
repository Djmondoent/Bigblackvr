AFRAME.registerComponent("sync-animation", {
  init: function () {
    this.networkedComponent = this.el.components["networked"];
    this.currentAction = "";
  },

  tick: function () {
    if (this.networkedComponent) {
      const mixer = this.el.components["animation-mixer"].mixer;

      if (this.networkedComponent.isMine()) {
        const action =
          mixer._actions.length > 0 ? mixer._actions[0]._clip.name : "";
        if (action !== this.currentAction) {
          this.currentAction = action;
          this.networkedComponent.sync.setAttribute("animation", action);
        }
      } else {
        const action = this.networkedComponent.sync.data["animation"];
        if (action !== undefined && action !== this.currentAction) {
          this.currentAction = action;

          if (action === "") {
            mixer.stopAllAction();
          } else {
            mixer.clipAction(action).play();
          }
        }
      }
    }
  },
});
