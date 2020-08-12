import GameSprites from './Sprites.js';
import Environment from './Environment.js';

export default class FlappyBird {

  constructor() {
    this.spriteX = 0;
    this.spriteY = 0;
    this.width = 33;
    this.height = 24;
    this.positionAxisX = 10;
    this.positionAxisY = 50;
  
    this.fallSpeed = 0;
    this.jumpForce = 4.50;
    this.gravityForce = 0.25;
  }

  jump() {
    console.log('------------JUMP------------')
    this.fallSpeed = 0;
    this.fallSpeed = - this.jumpForce;
  }

  runScript() {
    this.fallSpeed += this.gravityForce;
    this.positionAxisY += this.fallSpeed;

    this.foot = (this.positionAxisY + this.height);
    console.log('Fallspeed: ' + this.fallSpeed)
    console.log('Foot: ' + this.foot);
  }

  draw() {
    Environment.context.drawImage(
      GameSprites,
      this.spriteX, this.spriteY,
      this.width, this.height,
      this.positionAxisX, this.positionAxisY,
      this.width, this.height,
    );
  }
}