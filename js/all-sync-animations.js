AFRAME.registerComponent('sync-animation', {
  init: function () {
    this.networkedComponent = this.el.components['networked'];
    this.animationState = '';
  },

  tick: function () {
    if (this.networkedComponent) {
      const animationComponent = this.el.components['animation'];
      const animationMixerComponent = this.el.components['animation-mixer'];
      let newState = '';

      if (animationComponent && !animationComponent.animation.paused) {
        newState = 'animation';
      } else if (animationMixerComponent && animationMixerComponent.mixer._actions.length > 0) {
        newState = 'animation-mixer';
      }

      if (this.networkedComponent.isMine()) {
        if (newState !== this.animationState) {
          this.animationState = newState;
          this.networkedComponent.sync.setAttribute('animationState', newState);
        }
      } else {
        const animationState = this.networkedComponent.sync.data['animationState'];
        if (animationState !== undefined && animationState !== this.animationState) {
          this.animationState = animationState;

          if (animationComponent) {
            if (animationState === 'animation') {
              animationComponent.animation.play();
            } else {
              animationComponent.animation.pause();
            }
          }

          if (animationMixerComponent) {
            const mixer = animationMixerComponent.mixer;
            if (animationState === 'animation-mixer') {
              mixer.clipAction('*').play();
            } else {
              mixer.stopAllAction();
            }
          }
        }
      }
    }
  },
});
