import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;
const n2m = new NotionToMarkdown({ notionClient: notion });

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' });
  }

  try {
    // 1. Fetch the page by slug
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'slug',
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const page = response.results[0];

    // 2. Extract metadata
    const metadata = {
      id: page.id,
      title: page.properties['Title ']?.title[0]?.plain_text || 'Untitled',
      slug: page.properties.slug?.rich_text[0]?.plain_text || page.id,
      category: page.properties.Category?.select?.name || 'Uncategorized',
      date: page.properties.Date?.date?.start || '',
      cover: page.properties.Cover?.files[0]?.file?.url || page.properties.Cover?.files[0]?.external?.url || null,
    };

    // 3. Fetch markdown content
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    res.status(200).json({
      metadata,
      markdown: mdString.parent || mdString, 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
}
