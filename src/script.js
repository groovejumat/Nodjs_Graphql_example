const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
    const newLinks = await prisma.link.create()
    const allLinks = await prisma.link.findMany()
    console.log(allLinks)
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })


