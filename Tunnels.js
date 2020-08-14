import GameSprites from './Sprites.js';
import Environment from './Environment.js';

export default class Tunnels {

  constructor() {
    this.randomY = (Math.random() * 100);
    this.randomY = (Math.random() < 0.5 ? -this.randomY : this.randomY);
    this.Bottom = {
      spriteX: 0,
      spriteY: 169,
      positionAxisX: 150,  //canvas.width  <-----|__|
      positionAxisY: 238 + this.randomY,
    }
    this.Top = {
      spriteX: 52,
      spriteY: 169,
      positionAxisX: 150,  //canvas.width  <-----|__|
      positionAxisY: -238 + this.randomY,
    }
    this.width = 52;
    this.height = 400;
  }

  draw() {
    Environment.context.drawImage(
      GameSprites,
      this.Bottom.spriteX, this.Bottom.spriteY,
      this.width, this.height,
      this.Bottom.positionAxisX, this.Bottom.positionAxisY,
      this.width, this.height,
    );

    Environment.context.drawImage(
      GameSprites,
      this.Top.spriteX, this.Top.spriteY,
      this.width, this.height,
      this.Top.positionAxisX, this.Top.positionAxisY,
      this.width, this.height,
    );
  }
}