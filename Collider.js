const Collider = {
  collision(player, block, direction, nextFrame) {
    if (direction === 'bottom') {
      const playerColliderPoint = player.positionAxisY + player.height;
      const blockColliderPoint = block.positionAxisY;
      const nextFrameColliderPoint = playerColliderPoint + nextFrame;

      if (playerColliderPoint >= blockColliderPoint) {
        // Houve colisão
        return true;
      }
      else if (nextFrameColliderPoint > block.positionAxisY) {
        // Haverá colisão no próximo frame
        player.positionAxisY = (block.positionAxisY - player.height);
        return true;
      }
      else {
        return false;
      }
    }
    return false;
  }
}

export default Collider;