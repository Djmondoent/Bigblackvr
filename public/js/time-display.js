AFRAME.registerComponent("time-display", {
  schema: {
    interval: { type: "number", default: 60000 }, // 1 minute interval (in milliseconds)
  },

  init: function () {
    this.updateTime = this.updateTime.bind(this);
    this.tick = AFRAME.utils.throttleTick(this.tick, this.data.interval, this);
  },

  updateTime: function () {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const timeString = `${hours}:${minutes}`;
    this.el.setAttribute("text", "value", timeString);
  },

  tick: function () {
    this.updateTime();
  },
});
