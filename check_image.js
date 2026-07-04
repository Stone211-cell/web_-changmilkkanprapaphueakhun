const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function main() {
  const articles = await p.article.findMany({ select: { image: true, title: true } });
  console.log('Total articles:', articles.length);
  const domains = [...new Set(articles.map(a => {
    if (!a.image) return 'none';
    try { return new URL(a.image).hostname; }
    catch { return 'invalid'; }
  }))];
  console.log('Image domains:', JSON.stringify(domains));
  
  // Show first 5 image URLs
  articles.slice(0, 5).forEach(a => console.log(a.title, '->', a.image));
  await p.$disconnect();
}

main().catch(console.error);
