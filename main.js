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

  stop = Collider.collision(flappyBird, ground, 'bottom', flappyBird.fallSpeed);
 
  Environment.fillBackground();
  scenario.draw();
  tunnels.draw();

  if(!stop){
    ground.runScript();
  }
  ground.draw();

  if(!stop){
    flappyBird.runScript();
  }
  flappyBird.draw();

  if(!stop){
    requestAnimationFrame(loop);
  }
}

loop();
// Refatorar 👆