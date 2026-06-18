import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Update the latest portfolio to have a postUrl for testing
  const portfolio = await prisma.portfolio.findFirst({
    orderBy: { createdAt: 'desc' }
  });

  if (portfolio) {
    await prisma.portfolio.update({
      where: { id: portfolio.id },
      data: {
        postUrl: 'https://www.facebook.com/'
      }
    });
    console.log('Updated portfolio:', portfolio.id, 'with a test postUrl (https://www.facebook.com/).');
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
