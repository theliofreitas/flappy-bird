const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const Environment = {
  canvas,
  context,
  fillBackground() {
    context.fillStyle = '#70c5ce';
    context.fillRect(0,0,canvas.width, canvas.height)
  }
}

export default Environment;