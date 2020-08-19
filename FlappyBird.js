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
    // Remover console.log
    console.log('------------JUMP------------')
    this.fallSpeed = 0;
    this.fallSpeed = - this.jumpForce;
  }

  runScript() {
    this.fallSpeed += this.gravityForce;
    this.positionAxisY += this.fallSpeed;

    this.foot = (this.positionAxisY + this.height);
    // console.log('Fallspeed: ' + this.fallSpeed)
    // console.log('Foot: ' + this.foot);
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

  collidesWithGround(ground, nextFrame) {
    const playerColliderPoint = this.positionAxisY + this.height;
    const groundColliderPoint = ground.positionAxisY;
    const nextFrameColliderPoint = playerColliderPoint + nextFrame;

    if (playerColliderPoint >= groundColliderPoint) {
      // Houve colisão
      return true;
    }
    else if (nextFrameColliderPoint > ground.positionAxisY) {
      // Haverá colisão no próximo frame
      this.positionAxisY = (ground.positionAxisY - this.height);
      return true;
    }
    else {
      return false;
    }
  }

  // Refatorar 👇
  collidesWithTunnels(tunnels) {
    const playerXColliderPoint = this.positionAxisX + this.width;
    const playerBottomYColliderPoint = this.positionAxisY + this.height;
    const playerTopYColliderPoint = this.positionAxisY;

    const tunnelsXColliderPoint = tunnels.Bottom.positionAxisX;
    const tunnelsBottomYColliderPoint = tunnels.Bottom.positionAxisY;
    const tunnelsTopYColliderPoint = tunnels.Top.positionAxisY + tunnels.height;

    const collisionRange = tunnels.Bottom.positionAxisX + tunnels.width;

    if (playerXColliderPoint >= tunnelsXColliderPoint) { 
      if (this.positionAxisX < collisionRange){
        // Bottom Collision
        if (playerBottomYColliderPoint >= tunnelsBottomYColliderPoint) {
          return true;
        }
        // Top Collision
        else if (playerTopYColliderPoint <= tunnelsTopYColliderPoint) {
          return true;
        }
        else {
          return false;
        }
      }
    }
  }
  // Refatorar 👆
}