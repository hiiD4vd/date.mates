const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');

async function convertHeicToJpg(dirPath) {
  const files = await promisify(fs.readdir)(dirPath, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dirPath, file.name);

    if (file.isDirectory()) {
      await convertHeicToJpg(fullPath);
    } else if (path.extname(file.name).toLowerCase() === '.heic') {
      try {
        console.log(`Converting ${fullPath}...`);
        const inputBuffer = await promisify(fs.readFile)(fullPath);
        const outputBuffer = await convert({
          buffer: inputBuffer, // the HEIC file buffer
          format: 'JPEG',      // output format
          quality: 1           // the jpeg compression quality, between 0 and 1
        });

        const newPath = fullPath.replace(/\.heic$/i, '.jpg');
        await promisify(fs.writeFile)(newPath, outputBuffer);
        console.log(`Saved ${newPath}`);
      } catch (err) {
        console.error(`Error converting ${fullPath}:`, err);
      }
    }
  }
}

const targetDir = path.join(__dirname, 'public', 'assets', 'images');
convertHeicToJpg(targetDir).then(() => {
  console.log('Conversion complete.');
});
