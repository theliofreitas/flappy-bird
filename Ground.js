import GameSprites from './Sprites.js';
import Environment from './Environment.js';

export default class Ground {

  constructor() {
    this.spriteX = 0;
    this.spriteY = 610;
    this.width = 224;
    this.height = 112;
    this.positionAxisX = 0;
    this.positionAxisY = Environment.canvas.height - this.height;
  }

  runScript() {
    let repeatPoint = this.width / 2;
    let moveLocation = this.positionAxisX - 1;
    this.positionAxisX = moveLocation % repeatPoint;
  }

  draw() {
    Environment.context.drawImage(
      GameSprites,
      this.spriteX, this.spriteY,
      this.width, this.height,
      this.positionAxisX, this.positionAxisY,
      this.width, this.height,
    );
    Environment.context.drawImage(
      GameSprites,
      this.spriteX, this.spriteY,
      this.width, this.height,
      (this.positionAxisX + this.width), this.positionAxisY,
      this.width, this.height,
    );
  }
}