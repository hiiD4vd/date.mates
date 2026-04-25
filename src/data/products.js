export const defaultImages1 = ['/assets/images/IMG_1029_jpg.jpg', '/assets/images/IMG_1053_jpg.jpg', '/assets/images/0cdfbc84-79f4-4692-92e3-ef77033f5d9c.JPG'];
export const defaultImages2 = ['/assets/images/aebf960e-e5ea-49b3-b497-fe6442fa2c34.JPG', '/assets/images/1F42A6DD-11EA-4256-8D99-C57D0DC2F04B.jpg', '/assets/images/1e8e2f2d-fdd6-4588-b0a5-ad6ec83053ea.JPG'];
export const defaultImages3 = ['/assets/images/228f6c06-96f6-4cfc-b9d3-f2d5eb85da9e.JPG', '/assets/images/34E60EE6-2080-434F-98C8-B1DE0F2B369D.JPG', '/assets/images/IMG_1061_jpg.jpg'];

export const products = [
  // Highlight Packages
  { id: 1, category: 'Highlight Packages', isFeatured: true, title: 'Birthday<br/>Picnic Setup', desc: 'Fun & aesthetic celebration with friends', price: 'Start from 150k/pax', priceValue: 150000, images: ['/assets/images/IMG_1029_jpg.jpg', ...defaultImages2] },
  { id: 2, category: 'Highlight Packages', isFeatured: true, title: 'Anniversary<br/>Picnic Setup', desc: 'Intimate and romantic setup for couples', price: 'Start from 350k', priceValue: 350000, images: ['/assets/images/IMG_1053_jpg.jpg', ...defaultImages1] },
  { id: 3, category: 'Highlight Packages', isFeatured: true, title: 'Prewedding<br/>Picnic Setup', desc: 'Camera-ready aesthetic styling for content', price: 'Start from 500k', priceValue: 500000, images: ['/assets/images/0cdfbc84-79f4-4692-92e3-ef77033f5d9c.JPG', ...defaultImages3] },
  { id: 4, category: 'Highlight Packages', isFeatured: false, title: 'Rental Only<br/>Package', desc: 'DIY aesthetic setup with our curated props', price: 'Contact Us', priceValue: 0, images: ['/assets/images/aebf960e-e5ea-49b3-b497-fe6442fa2c34.JPG', ...defaultImages2] },

  // Decoration Set
  { id: 5, category: 'Decoration Set', isFeatured: false, title: 'Vintage<br/>Lace Canopy', desc: 'A soft lace touch for your dreamy moments', price: 'Rp 220.000', priceValue: 220000, images: ['/assets/images/aebf960e-e5ea-49b3-b497-fe6442fa2c34.JPG', ...defaultImages1] },
  { id: 6, category: 'Decoration Set', isFeatured: false, title: 'Earth & Stone<br/>Centerpiece', desc: 'Minimalist earthy table setting elements', price: 'Rp 120.000', priceValue: 120000, images: ['/assets/images/1e8e2f2d-fdd6-4588-b0a5-ad6ec83053ea.JPG', ...defaultImages3] },

  // Our Picnic Set
  { id: 7, category: 'Our Picnic Set', isFeatured: true, title: 'Garden<br/>Tea Party', desc: 'Elegant tea setup around the beautiful nature', price: 'Rp 275.000', priceValue: 275000, images: ['/assets/images/aebf960e-e5ea-49b3-b497-fe6442fa2c34.JPG', ...defaultImages2] },
  { id: 8, category: 'Our Picnic Set', isFeatured: false, title: 'Lakeside<br/>Serenity', desc: 'Cozy blankets and aesthetic pillows for two', price: 'Rp 200.000', priceValue: 200000, images: ['/assets/images/1F42A6DD-11EA-4256-8D99-C57D0DC2F04B.jpg', ...defaultImages1] },
  { id: 9, category: 'Our Picnic Set', isFeatured: true, title: 'Sunrise<br/>Breakfast', desc: 'Start your day with an aesthetic sunrise', price: 'Rp 180.000', priceValue: 180000, images: ['/assets/images/228f6c06-96f6-4cfc-b9d3-f2d5eb85da9e.JPG', ...defaultImages3] },
  { id: 10, category: 'Our Picnic Set', isFeatured: false, title: 'Golden Hour<br/>Setup', desc: 'Perfect warmth and glow for your evening date', price: 'Rp 320.000', priceValue: 320000, images: ['/assets/images/34E60EE6-2080-434F-98C8-B1DE0F2B369D.JPG', ...defaultImages2] },

  // Board Games
  { id: 13, category: 'Board Games', isFeatured: true, title: 'Aesthetic<br/>Chess Set', desc: 'Custom carved wooden chess for slow minds', price: 'Rp 50.000', priceValue: 50000, images: ['/assets/images/IMG_1061_jpg.jpg', ...defaultImages2] },
  { id: 14, category: 'Board Games', isFeatured: false, title: 'Vintage<br/>Scrabble', desc: 'Word weaving while watching the sunset', price: 'Rp 45.000', priceValue: 45000, images: ['/assets/images/aebf960e-e5ea-49b3-b497-fe6442fa2c34.JPG', ...defaultImages1] },
  
  // Additional Items
  { id: 18, category: 'Additional Items', isFeatured: true, title: 'Polaroid<br/>Capture Bundle', desc: 'Capture the wonderful memories forever', price: 'Rp 100.000', priceValue: 100000, images: ['/assets/images/34E60EE6-2080-434F-98C8-B1DE0F2B369D.JPG', ...defaultImages3] },
  { id: 19, category: 'Additional Items', isFeatured: false, title: 'Extra<br/>Comfy Pillows', desc: 'Add more comfort to your outdoor relaxing', price: 'Rp 30.000', priceValue: 30000, images: ['/assets/images/1F42A6DD-11EA-4256-8D99-C57D0DC2F04B.jpg', ...defaultImages2] }
];

export const categories = ['See All', 'Highlight Packages', 'Decoration Set', 'Our Picnic Set', 'Board Games', 'Additional Items'];
export const badgeColors = ['bg-forest/90', 'bg-forest/90', 'bg-forest/90'];
