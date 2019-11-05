Preload.prototype = {
  preload: function() {
    // Preloaded assets for the game sprites.
    this.load.image("background", "assets/testspace.jpg", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("ship", "assets/ship.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("ship2", "assets/ship2.png", {
      frameWidth: 32,
      frameHeight: 16
    });
    this.load.spritesheet("ship3", "assets/ship3.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("explosion", "assets/explosion.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.image("base", "assets/platform.png");
  },
  create: function() {
    this.game.state.start("main-intro");
  }
};
