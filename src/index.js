const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const { printStack } = require('@prisma/client/runtime')

const prisma = new PrismaClient()
// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        prisma,
    }
})

// 1
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]

// Implementing the resolver function
let idCount = links.length
const resolvers = {
    Query: {
        info: () => `This is the PAI of a Hackernews Clone`,
        feed: () => async (parent, args, context) => {
            return context.prisma.link.findMany()
        },
    },
    // Mutation: {
    //     post: (parent, args) => {
    //         const link = {
    //             id: `link-${idCount++}`,
    //             description: args.description,
    //             url: args.url,
    //         }
    //         links.push(link)
    //         return link
    //     }
    // },
    Mutation: {
        post: (parent, args, context, info) => {
            const newLink = context.prisma.link.create({
                data: {
                    url: args.url,
                    description: args.description,
                },
            })
            return newLink
        },
    },
}



server.start(()=> console.log(`Server is running on http://192.168.147.110:4000`))

