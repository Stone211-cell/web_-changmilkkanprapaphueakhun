import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Update the first portfolio item to use a sample video
  const portfolio = await prisma.portfolio.findFirst({
    orderBy: { createdAt: 'desc' }
  });

  if (portfolio) {
    await prisma.portfolio.update({
      where: { id: portfolio.id },
      data: {
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        mediaType: 'video'
      }
    });
    console.log('Updated portfolio:', portfolio.id, 'with a test video.');
  }

  // To force Next.js to revalidate the page if deployed, we can't easily do it from here without calling the webhook or a revalidate API.
  // But wait, the website might have a revalidation API.
}

main().catch(console.error).finally(() => prisma.$disconnect());
