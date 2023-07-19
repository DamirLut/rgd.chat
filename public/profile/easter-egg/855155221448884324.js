const avatar = document.getElementById('avatar');

const fox = new Image();
fox.src =
  'https://cdn.discordapp.com/attachments/1127255167096586252/1131248708432973915/fox.gif';

fox.onload = () => {
  fox.style.position = 'absolute';
  fox.style.right = '1rem';
  fox.style.bottom = '0';
  fox.style.height = '70%';
  fox.style.imageRendering = 'pixelated';
};

avatar.after(fox);
