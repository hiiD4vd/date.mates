const fs = require('fs');
const path = require('path');
const dir = 'C:/daud/projek bisnis/datemates/public/assets/images/product katalog/web_content';
const files = fs.readdirSync(dir);
const markdown = files.filter(f => !f.toLowerCase().endsWith('.heic') && !f.toLowerCase().endsWith('.heif'))
  .map(f => `### ${f}\n![${f}](${dir}/${f.replace(/ /g, '%20')})`)
  .join('\n\n---\n\n');
fs.writeFileSync('C:/Users/Asus/.gemini/antigravity-ide/brain/1d0b014e-af3d-4fa7-98d7-15c701469983/gallery2.md', markdown);
