import GameSprites from './Sprites.js';
import Environment from './Environment.js';

export default class Scenario {

  constructor() {
    this.spriteX = 390;
    this.spriteY = 0;
    this.width = 275;
    this.height = 204;
    this.positionAxisX = 0;
    this.positionAxisY = Environment.canvas.height - this.height;
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
};