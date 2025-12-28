// Pixel Wave Animation for Hero Background
console.log('pixelWave.js loaded!');

const canvas = document.getElementById('pixel-wave-canvas');
console.log('Canvas element:', canvas);

if (!canvas) {
  console.error('Canvas element not found!');
} else {
  const ctx = canvas.getContext('2d');
  console.log('Canvas context:', ctx);

  const pixelSize = 20;
  let time = 0;

  // Set canvas size
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth || window.innerWidth;
    canvas.height = canvas.offsetHeight || window.innerHeight;
    console.log('Canvas size set to:', canvas.width, 'x', canvas.height);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function draw() {
    const cols = Math.floor(canvas.width / pixelSize);
    const rows = Math.floor(canvas.height / pixelSize);

    // Fill dark blue background
    ctx.fillStyle = '#0a0e1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw animated pixels
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * pixelSize;
        const y = j * pixelSize;

        // Wave calculation
        const wave1 = Math.sin(i * 0.15 + time);
        const wave2 = Math.sin(j * 0.12 + time * 0.7);
        const wave3 = Math.sin((i + j) * 0.08 + time * 0.5);
        const combined = (wave1 + wave2 + wave3) / 3;

        // Dark blue gradient only
        let color;
        if (combined > 0.6) {
          color = '#1e3a5f'; // lightest dark blue
        } else if (combined > 0.3) {
          color = '#1a2f4d'; // medium-light dark blue
        } else if (combined > 0.0) {
          color = '#15243d'; // medium dark blue
        } else if (combined > -0.3) {
          color = '#101a2e'; // darker blue
        } else if (combined > -0.6) {
          color = '#0d1524'; // very dark blue
        } else {
          continue; // Skip base color
        }

        ctx.fillStyle = color;
        ctx.fillRect(x, y, pixelSize - 1, pixelSize - 1);
      }
    }
  }

  function animate() {
    time += 0.03;
    draw();
    requestAnimationFrame(animate);
  }

  console.log('Starting animation...');
  animate();
}
