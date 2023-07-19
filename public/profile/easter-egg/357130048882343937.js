const script = document.createElement('script');
script.src =
  'https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.11.0/tsparticles.confetti.bundle.min.js';

script.onload = () => {
  const handler = (e) => {
    const { x, y } = e;

    confetti({
      spread: 360,
      ticks: 200,
      gravity: 1,
      decay: 0.94,
      startVelocity: 30,
      particleCount: 15,
      scalar: 5,
      origin: { x: x / innerWidth, y: y / innerHeight },
      shapes: ['image'],
      shapeOptions: {
        image: [
          {
            src: 'https://cdn.discordapp.com/emojis/1022894084916002836.webp?size=64&quality=lossless',
            width: 64,
            height: 64,
          },
        ],
      },
    });
  };

  window.addEventListener('click', handler);

  window.addEventListener('page-leave', () => {
    window.removeEventListener('click', handler);
    script.remove();
  });
};

document.body.appendChild(script);
