// npx http-server --port 6060

import Environment from './Environment.js';
import FlappyBird from './FlappyBird.js';
import Ground from './Ground.js';
import Collider from './Collider.js';
import Scenario from './Scenario.js';
import Tunnels from './Tunnels.js';

const flappyBird = new FlappyBird();
const ground = new Ground();
const scenario = new Scenario();
const tunnels = new Tunnels();

// Refatorar 👇
window.addEventListener('click', function() {
    flappyBird.jump();
})

let stop = false;

function loop() {
  // stop = Collider.collision(flappyBird, ground, 'bottom', flappyBird.fallSpeed);
  stop = flappyBird.collidesWithGround(ground, flappyBird.fallSpeed) || flappyBird.collidesWithTunnels(tunnels, flappyBird.fallSpeed); 
  // stop = flappyBird.collidesWithGround(ground, flappyBird.fallSpeed) || Collider.collision(flappyBird, tunnels.Bottom, 'bottom', flappyBird.fallSpeed);

  Environment.fillBackground();
  scenario.draw();

  tunnels.draw();
  ground.draw();
  flappyBird.draw();
  
  if (!stop) {
    tunnels.runScript();
    ground.runScript();
    flappyBird.runScript();
    requestAnimationFrame(loop);
  }
}

loop();
// Refatorar 👆