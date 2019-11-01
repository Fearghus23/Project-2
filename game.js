var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('space', 'assets/testspace.jpg'); 
  this.load.image('bomb', './assets/bomb.png.png'); 
}

function create ()
{
  this.add.image(400,300, 'space'); 
}

function update ()
{
}