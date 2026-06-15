export const products = [
  // Fully Styled Picnic (PDF 1)
  { id: 101, category: 'Fully Styled Picnic', isFeatured: true, title: 'Fully Styled Setup (2-4 Pax)', desc: '1.5 hrs setup/teardown, low tables, rug, cushions, complete tableware, decorations, board games.', price: 'Start from Rp 600.000', priceValue: 600000, price24h: 600000, images: ['/assets/images/product katalog/complete set1.jpg'] },
  { id: 102, category: 'Fully Styled Picnic', isFeatured: false, title: 'Fully Styled Setup (5-8 Pax)', desc: '1.5 hrs setup/teardown, low tables, rug, cushions, complete tableware, decorations, board games.', price: 'Start from Rp 900.000', priceValue: 900000, price24h: 900000, images: ['/assets/images/product katalog/complete set2.JPG'] },
  { id: 103, category: 'Fully Styled Picnic', isFeatured: false, title: 'Fully Styled Setup (9-12 Pax)', desc: '1.5 hrs setup/teardown, low tables, rug, cushions, complete tableware, decorations, board games.', price: 'Start from Rp 1.200.000', priceValue: 1200000, price24h: 1200000, images: ['/assets/images/product katalog/premium set.jpg'] },

  // Special Occasions (PDF 1)
  { id: 104, category: 'Special Occasions', isFeatured: true, title: 'Special Occasion (2-4 Pax)', desc: 'Includes 1 Cake & Basic Decor. Perfect for Birthdays, Bridal Showers.', price: 'Start from Rp 800.000', priceValue: 800000, price24h: 800000, images: ['/assets/images/product katalog/parisian set1.jpg'] },
  { id: 105, category: 'Special Occasions', isFeatured: false, title: 'Special Occasion (5-8 Pax)', desc: 'Includes 1 Cake, Small Flower & Upgraded Decor.', price: 'Start from Rp 1.300.000', priceValue: 1300000, price24h: 1300000, images: ['/assets/images/product katalog/parisian set2.JPG'] },
  { id: 106, category: 'Special Occasions', isFeatured: false, title: 'Special Occasion (9-12 Pax)', desc: 'Includes 2 Cakes, Medium Flower & Premium Decor.', price: 'Start from Rp 1.800.000', priceValue: 1800000, price24h: 1800000, images: ['/assets/images/product katalog/premium set.jpg'] },

  // Special Experiences (PDF 1)
  { id: 107, category: 'Special Experiences', isFeatured: false, title: 'BBQ Party (Grill + Meat)', desc: 'Complete BBQ package with meat.', price: 'Start from Rp 350.000', priceValue: 350000, price24h: 350000, images: ['/assets/images/product katalog/bbqset 12.jpg'] },
  { id: 108, category: 'Special Experiences', isFeatured: true, title: 'Outdoor Cinema', desc: 'Mini Projector + Screen Rental.', price: 'Start from Rp 150.000', priceValue: 150000, price24h: 150000, images: ['/assets/images/product katalog/image (1).png'] },

  // Corporate & B2B (PDF 1)
  { id: 109, category: 'Corporate & B2B', isFeatured: true, title: 'Team Building / Outing', desc: 'For up to 20 pax. Custom aesthetic styling.', price: 'Start from Rp 2.500.000', priceValue: 2500000, price24h: 2500000, images: ['/assets/images/product katalog/middle set1.jpg'] },
  { id: 110, category: 'Corporate & B2B', isFeatured: false, title: 'Corporate Gifting', desc: 'Custom corporate gifts or hampers.', price: 'Start from Rp 150.000/pax', priceValue: 150000, price24h: 150000, images: ['/assets/images/product katalog/teatime set1.jpg'] },

  // DIY Picnic Sets (PDF 2)
  { id: 201, category: 'DIY Picnic Sets', isFeatured: true, title: 'Sunday Morning Set', desc: 'Kursi 2pcs, alas, meja, floral tea cup 2pcs, floral teapot.', price: 'Start from Rp 250.000', priceValue: 250000, price24h: 300000, images: ['/assets/images/product katalog/teatime set1.jpg'] },
  { id: 202, category: 'DIY Picnic Sets', isFeatured: true, title: 'Chill on the Sunset', desc: 'Kursi lipat 2pcs, meja lipat, keranjang basic, teddy bear.', price: 'Start from Rp 200.000', priceValue: 200000, price24h: 220000, images: ['/assets/images/product katalog/middle set1.jpg'] },
  { id: 203, category: 'DIY Picnic Sets', isFeatured: true, title: 'Premium Set', desc: 'Teepee tent, placement besar, kain alas, tikar, meja 70x50, dan properti premium lengkap 2 pax.', price: 'Start from Rp 350.000', priceValue: 350000, price24h: 450000, images: ['/assets/images/product katalog/premium set.jpg'] },
  { id: 204, category: 'DIY Picnic Sets', isFeatured: false, title: 'Teatime Set', desc: 'Keranjang mini, piring, meja, tea set, lampion, bantal, boneka, botol kaca, bunga artifisial.', price: 'Start from Rp 165.000', priceValue: 165000, price24h: 250000, images: ['/assets/images/product katalog/teatime set1.jpg'] },
  { id: 205, category: 'DIY Picnic Sets', isFeatured: false, title: 'Parisian Set', desc: 'Tas rotan, meja, piring, gelas, topi, lilin, bantal, botol kaca, placement gold.', price: 'Start from Rp 165.000', priceValue: 165000, price24h: 250000, images: ['/assets/images/product katalog/parisian set1.jpg'] },
  { id: 206, category: 'DIY Picnic Sets', isFeatured: false, title: 'Movie Set', desc: 'Proyektor, layar, teepee tent, beanbag, selimut, lampu tumblr, bantal.', price: 'Start from Rp 500.000', priceValue: 500000, price24h: 750000, images: ['/assets/images/product katalog/image.png'] },
  { id: 207, category: 'DIY Picnic Sets', isFeatured: false, title: 'Complete Set (Original)', desc: 'Keranjang, placement eceng gondok, piring, bantal, box kayu, pitcher.', price: 'Start from Rp 165.000', priceValue: 165000, price24h: 250000, images: ['/assets/images/product katalog/complete set1.jpg'] },
  { id: 208, category: 'DIY Picnic Sets', isFeatured: false, title: 'Middle Set (Original)', desc: 'Keranjang, piring, gelas wine, talenan, tempat buah, vas bunga.', price: 'Start from Rp 120.000', priceValue: 120000, price24h: 150000, images: ['/assets/images/product katalog/middle set2.jpg'] },
  { id: 209, category: 'DIY Picnic Sets', isFeatured: false, title: 'Simple Set (Original)', desc: 'Keranjang, piring, talenan kayu, tempat buah, vas bunga.', price: 'Start from Rp 90.000', priceValue: 90000, price24h: 130000, images: ['/assets/images/product katalog/simple set1.jpg'] },
  { id: 210, category: 'DIY Picnic Sets', isFeatured: false, title: 'Basic Set (Original)', desc: 'Keranjang, alas, topi, talenan kayu, bunga artifisial.', price: 'Start from Rp 70.000', priceValue: 70000, price24h: 100000, images: ['/assets/images/product katalog/basic set1.jpg'] },
  { id: 211, category: 'DIY Picnic Sets', isFeatured: false, title: 'BBQ Set (Rental)', desc: 'Portable stove, grill pan, gas, alat pencapit, kuas, mini table.', price: 'Start from Rp 85.000', priceValue: 85000, price24h: 120000, images: ['/assets/images/product katalog/bbq set 1.jpg'] },
  { id: 212, category: 'DIY Picnic Sets', isFeatured: false, title: 'Dessert Corner', desc: 'Tier Cupcake, Dessert Corner 2 pcs, Candy Container.', price: 'Start from Rp 70.000', priceValue: 70000, price24h: 100000, images: ['/assets/images/product katalog/teatime.jpg'] },

  // Board Games (PDF 2)
  { id: 301, category: 'Board Games', isFeatured: false, title: 'Monopoli & Catur', desc: 'Board Games', price: 'Rp 20.000', priceValue: 20000, price24h: 20000, images: ['https://placehold.co/600x600/e8f2e9/2c5e3b?text=Monopoli+%26+Catur'] },
  { id: 302, category: 'Board Games', isFeatured: false, title: '5 Second Rule', desc: 'Board Games', price: 'Rp 25.000', priceValue: 25000, price24h: 25000, images: ['https://placehold.co/600x600/e8f2e9/2c5e3b?text=5+Second+Rule'] },
  { id: 303, category: 'Board Games', isFeatured: false, title: 'Uno', desc: 'Board Games', price: 'Rp 15.000', priceValue: 15000, price24h: 15000, images: ['https://placehold.co/600x600/e8f2e9/2c5e3b?text=Uno'] },
  { id: 304, category: 'Board Games', isFeatured: false, title: 'Ludo', desc: 'Board Games', price: 'Rp 15.000', priceValue: 15000, price24h: 15000, images: ['https://placehold.co/600x600/e8f2e9/2c5e3b?text=Ludo'] },
  { id: 305, category: 'Board Games', isFeatured: false, title: 'Ular Tangga', desc: 'Board Games', price: 'Rp 15.000', priceValue: 15000, price24h: 15000, images: ['https://placehold.co/600x600/e8f2e9/2c5e3b?text=Ular+Tangga'] },

  // Add-ons (PDF 1 & 2)
  { id: 401, category: 'Add-ons', isFeatured: false, title: 'Teepee Tent', desc: 'Pink / Putih / Cream', price: 'Rp 100.000', priceValue: 100000, price24h: 100000, images: ['/assets/images/product katalog/IMG_0394.JPG'] },
  { id: 402, category: 'Add-ons', isFeatured: false, title: 'Bean Bag', desc: 'Coklat / Abu / Colorful', price: 'Rp 50.000', priceValue: 50000, price24h: 50000, images: ['/assets/images/product katalog/IMG_0429.JPG'] },
  { id: 403, category: 'Add-ons', isFeatured: false, title: 'Mini Table 30x50cm', desc: 'Meja mini tambahan', price: 'Rp 50.000', priceValue: 50000, price24h: 50000, images: ['/assets/images/product katalog/IMG_0498.JPG'] },
  { id: 404, category: 'Add-ons', isFeatured: false, title: 'Mini Table 15x30cm', desc: 'Meja mini tambahan', price: 'Rp 25.000', priceValue: 25000, price24h: 25000, images: ['/assets/images/product katalog/IMG_0494.JPG'] },
  { id: 405, category: 'Add-ons', isFeatured: false, title: 'Black Board', desc: 'Untuk custom message', price: 'Rp 25.000', priceValue: 25000, price24h: 25000, images: ['/assets/images/product katalog/IMG_0394.JPG'] },
  { id: 406, category: 'Add-ons', isFeatured: false, title: 'Additional Hour', desc: 'Per 1 jam', price: 'Rp 50.000', priceValue: 50000, price24h: 50000, images: ['/assets/images/product katalog/IMG_0494.JPG'] },
  { id: 407, category: 'Add-ons', isFeatured: false, title: 'Fresh Flower Bouquet', desc: 'Bunga segar asli', price: 'Start from Rp 150.000', priceValue: 150000, price24h: 150000, images: ['/assets/images/product katalog/IMG_0494.JPG'] },
  { id: 408, category: 'Add-ons', isFeatured: false, title: 'Photographer', desc: 'Per 1 jam', price: 'Start from Rp 300.000', priceValue: 300000, price24h: 300000, images: ['/assets/images/product katalog/IMG_0494.JPG'] },
  { id: 409, category: 'Add-ons', isFeatured: false, title: 'Lantern', desc: 'Lentera aesthetic', price: 'Rp 25.000', priceValue: 25000, price24h: 25000, images: ['/assets/images/product katalog/IMG_0498.JPG'] },
  { id: 410, category: 'Add-ons', isFeatured: false, title: 'Candle', desc: 'Lilin dekorasi', price: 'Rp 25.000', priceValue: 25000, price24h: 25000, images: ['/assets/images/product katalog/IMG_0498.JPG'] },
  { id: 411, category: 'Add-ons', isFeatured: false, title: 'Piring Susun', desc: 'Tempat kue / dessert', price: 'Rp 15.000', priceValue: 15000, price24h: 15000, images: ['/assets/images/product katalog/IMG_0498.JPG'] },
  { id: 412, category: 'Add-ons', isFeatured: false, title: 'Mirror', desc: 'Cermin vintage', price: 'Rp 15.000', priceValue: 15000, price24h: 15000, images: ['/assets/images/product katalog/IMG_0498.JPG'] },
];

export const categories = ['See All', 'Fully Styled Picnic', 'DIY Picnic Sets', 'Special Occasions', 'Special Experiences', 'Corporate & B2B', 'Board Games', 'Add-ons'];
export const badgeColors = ['bg-forest/90', 'bg-forest/90', 'bg-forest/90'];
