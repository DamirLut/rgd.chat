const ggoose = new Image();
ggoose.src =
  'https://media.discordapp.net/attachments/856888909505757184/1130477509331386418/1111.png';

ggoose.style.display = 'none';
ggoose.style.position = 'fixed';
ggoose.style.right = '-100%';
ggoose.style.height = '25%';
ggoose.style.bottom = '0';
ggoose.style.transition = 'right 10s linear';

ggoose.onload = () => {
  ggoose.style.display = 'block';

  let direction = -1;
  const drive = () => {
    direction *= -1;
    ggoose.style.right = `${100 * direction}%`;
    ggoose.style.transform = `scaleX(${direction})`;
  };

  drive();
  const driveInterval = setInterval(drive, 10_000);

  window.addEventListener('page-leave', () => {
    ggoose.remove();
    clearInterval(driveInterval);
  });
};

document.body.append(ggoose);
