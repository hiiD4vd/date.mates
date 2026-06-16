const fs = require('fs');
const path = require('path');
const imagesDir = 'c:/daud/projek bisnis/datemates/public/assets/images/product katalog/web_content';
const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
let md = '# Image Gallery\n\n';
files.forEach(f => {
  const fullPath = path.join(imagesDir, f).replace(/\\/g, '/');
  md += `## ${f}\n![${f}](file:///${fullPath})\n\n`;
});
fs.writeFileSync('C:/Users/Asus/.gemini/antigravity-ide/brain/1d0b014e-af3d-4fa7-98d7-15c701469983/gallery.md', md);
