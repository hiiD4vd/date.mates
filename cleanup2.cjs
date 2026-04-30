const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/assets/images');
const srcDir = path.join(__dirname, 'src');
const indexFile = path.join(__dirname, 'index.html');

// Read all files in src recursively
function readAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            readAllFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const allSrcFiles = readAllFiles(srcDir);
allSrcFiles.push(indexFile);

// Read all text contents
const fileContents = allSrcFiles.map(f => {
    try {
        return fs.readFileSync(f, 'utf8');
    } catch {
        return '';
    }
}).join('\n');

const files = fs.readdirSync(imagesDir).filter(f => {
    return fs.statSync(path.join(imagesDir, f)).isFile();
});

let deletedCount = 0;

for (const file of files) {
    if (fileContents.includes(file)) {
        console.log('Kept image:', file);
    } else {
        console.log('Deleting unused image:', file);
        fs.unlinkSync(path.join(imagesDir, file));
        deletedCount++;
    }
}

console.log(`Deleted ${deletedCount} unused images.`);
