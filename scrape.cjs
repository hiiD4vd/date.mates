const https = require('https');

https.get('https://datemates.co/product/?product-page=1', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        // Extract all WooCommerce product images
        // <img width="..." height="..." src="..." class="attachment-woocommerce_thumbnail ... wp-post-image" alt="..." decoding="async" loading="lazy" ... />
        const regex = /<li[^>]*class="[^"]*product[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"[^>]*>[\s\S]*?<h2[^>]*>(.*?)<\/h2>/g;
        let match;
        const products = [];
        while ((match = regex.exec(data)) !== null) {
            products.push({ image: match[1], title: match[2].trim() });
        }
        console.log("PAGE 1:", products);
    });
});

https.get('https://datemates.co/product/?product-page=2', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const regex = /<li[^>]*class="[^"]*product[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"[^>]*>[\s\S]*?<h2[^>]*>(.*?)<\/h2>/g;
        let match;
        const products = [];
        while ((match = regex.exec(data)) !== null) {
            products.push({ image: match[1], title: match[2].trim() });
        }
        console.log("PAGE 2:", products);
    });
});
