const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/assets/images/product katalog');
const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(jpg|jpeg|png|JPG|PNG)$/));

let html = `
<!DOCTYPE html>
<html>
<head>
    <title>Image Gallery</title>
    <style>
        body { font-family: sans-serif; background: #f0f0f0; }
        .gallery { display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; }
        .item { background: white; padding: 10px; border-radius: 8px; text-align: center; width: 300px; }
        img { max-width: 100%; height: 200px; object-fit: contain; }
        .name { margin-top: 10px; font-weight: bold; font-size: 14px; word-break: break-all; }
    </style>
</head>
<body>
    <h1>Product Katalog Images</h1>
    <div class="gallery">
`;

for (const file of files) {
    html += `
        <div class="item">
            <img src="./public/assets/images/product katalog/${encodeURIComponent(file)}" />
            <div class="name">${file}</div>
        </div>
    `;
}

html += `
    </div>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'gallery.html'), html);
console.log('gallery.html generated');
