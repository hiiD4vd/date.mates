const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imagesDir = path.join(__dirname, 'public/assets/images');
const srcDir = path.join(__dirname, 'src');
const indexFile = path.join(__dirname, 'index.html');

// Get all files in imagesDir (not recursive)
const files = fs.readdirSync(imagesDir).filter(f => {
    return fs.statSync(path.join(imagesDir, f)).isFile();
});

let deletedCount = 0;

for (const file of files) {
    // Check if the filename is mentioned in src/ or index.html
    const searchStr = file;
    let isUsed = false;
    
    try {
        // grep returns 0 if found, 1 if not found
        // Use powershell Select-String since we are on Windows
        const cmd = `powershell "Get-ChildItem -Path '${srcDir}' -Recurse -File | Select-String -Pattern '${searchStr}' -Quiet"`;
        const result = execSync(cmd, { encoding: 'utf8' }).trim();
        if (result === 'True') {
            isUsed = true;
        }
        
        // Also check index.html
        const indexCmd = `powershell "Select-String -Path '${indexFile}' -Pattern '${searchStr}' -Quiet"`;
        const indexResult = execSync(indexCmd, { encoding: 'utf8' }).trim();
        if (indexResult === 'True') {
            isUsed = true;
        }
    } catch (e) {
        // Error means not found in powershell Select-String if it returns false/empty, but let's be careful
    }
    
    if (!isUsed) {
        console.log('Deleting unused image:', file);
        fs.unlinkSync(path.join(imagesDir, file));
        deletedCount++;
    } else {
        console.log('Kept image:', file);
    }
}

console.log(`Deleted ${deletedCount} unused images.`);
