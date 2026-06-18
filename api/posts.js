import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export default async function handler(req, res) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    const posts = response.results.map((page) => {
      return {
        id: page.id,
        title: page.properties['Title ']?.title[0]?.plain_text || 'Untitled',
        slug: page.properties.slug?.rich_text[0]?.plain_text || page.id,
        category: page.properties.Category?.select?.name || 'Uncategorized',
        excerpt: page.properties.Excerpt?.rich_text[0]?.plain_text || '',
        date: page.properties.Date?.date?.start || '',
        cover: page.properties.Cover?.files[0]?.file?.url || page.properties.Cover?.files[0]?.external?.url || 'https://placehold.co/600x400/e8f2e9/2c5e3b?text=Date.Mates',
      };
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}
