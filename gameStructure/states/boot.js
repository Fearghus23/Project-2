// eslint-disable-next-line no-empty-function
function Boot() {}

Boot.prototype = {
  preload: function() {
    // load preloader assets
  },
  create: function() {
    // setup game environment
    // scale, input etc..

    this.game.state.start("preload");
  }
};