import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_PRODUCTS_DB_ID;

export default async function handler(req, res) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    const products = response.results.map((page) => {
      // Extract images smartly
      const files = page.properties.Images?.files || [];
      const images = files.map(file => {
        if (file.type === 'file') {
            return file.file.url;
        } else if (file.type === 'external') {
            // Check if it's our hacky local reference
            if (file.name && file.name.startsWith('/assets/')) {
                return file.name;
            }
            return file.external.url;
        }
        return 'https://placehold.co/600x600/e8f2e9/2c5e3b?text=Image';
      });

      // Default fallback image if array is empty
      if (images.length === 0) {
          images.push('https://placehold.co/600x600/e8f2e9/2c5e3b?text=No+Image');
      }

      return {
        id: page.id,
        title: page.properties['Nama Produk']?.title[0]?.plain_text || 'Untitled',
        category: page.properties.Category?.select?.name || 'Uncategorized',
        isFeatured: page.properties.isFeatured?.checkbox || false,
        desc: page.properties.Description?.rich_text[0]?.plain_text || '',
        price: page.properties['Price Text']?.rich_text[0]?.plain_text || '',
        priceValue: page.properties['Price Value']?.number || 0,
        price24h: page.properties['Price 24h']?.number || 0,
        images: images,
      };
    });

    // Sort products so featured items are first, or sort by creation if needed
    // Notion API returns them randomly if not sorted, so we'll just sort them roughly by title or let the frontend handle it
    
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
