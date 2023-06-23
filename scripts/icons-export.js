const fs = require('fs');
const path = require('path');

const iconsFolder = path.resolve('./assets/icons');
const indexFile = path.join(iconsFolder, 'index.ts');

const icons = fs
  .readdirSync(iconsFolder)
  .filter((icon) => icon.endsWith('.svg'));

let indexFileData = '';

for (const icon of icons) {
  const name =
    'Icon' +
    icon
      .replace('.svg', '')
      .split('-')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('');
  const exportLine = `export { default as ${name} } from './${icon}';`;
  indexFileData += exportLine + '\n';
}

fs.writeFile(
  indexFile,
  indexFileData,
  {
    flag: 'w',
    encoding: 'utf-8',
  },
  (err) => {
    if (err) throw err;
    console.log('The index.ts has been saved!');
  }
);
