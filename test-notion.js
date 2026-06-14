import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

async function test() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    console.log("Success! Found", response.results.length, "posts.");
    if(response.results.length > 0) {
        const page = response.results[0];
        console.log("Sample post Title:", page.properties.Title?.title[0]?.plain_text);
        console.log("Sample post slug:", page.properties.slug?.rich_text[0]?.plain_text);
    }
  } catch (e) {
    console.error("Error connecting to Notion:", e.message);
  }
}
test();
