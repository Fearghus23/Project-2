import { KeyObject } from "crypto";
const KeyObject = require("crypto");

var config = {
  type: Phaser.Auto, 
  width: 1000, 
  height: 600, 
  physics: {
    default: 'arcade', 
    arcade: {
      gravity: {y: 300}, 
      debug: false
    }
  },

  scene: {
    preload: preload, 
    create: create, 
    update: update
  }
}; 

var textBox; 
var codeBomb; 
var score = 0; 
var gameOver = false; 
var scoreNum; 
var save = {
  level: 0, 
  score: 0
}; 

var keys = this.input.keyboard

var game = new Phaser.Game(config); 

function preload() {

  this.load.image('space', '../assets/testspace.jpg'); 
  this.load.spritesheet('turret', );
  this.load.spritesheet('missle',);
  this.load.image('base', '');

}

function create() {

  this.add.image(400, 300, 'space'); 

  this.anims.create({
    key: 'right', 
    frames: this.anims.generateFrameNumbers('turret', {start:1, end:5}),
    framerate: 20,
    repeat: -1
  }); 

  this.anims.create({
    key: 'left', 
    frames: this.anims.generateFrameNumbers('turret', {start:5, end:10}),
    framerate: 20,
    repeat: -1
  }); 

  // Inputs

  keys = scene.input.keyboard.on('keydown',) 


}

function update() {

}
