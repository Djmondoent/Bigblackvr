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
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    hours = String(hours).padStart(2, "0");

    const timeString = `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
    this.el.setAttribute("text", "value", timeString);
  },

  tick: function () {
    this.updateTime();
  },
});
