const { GraphQLServer } = require('graphql-yoga')
const { PubSub } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const { printStack } = require('@prisma/client/runtime')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')

const pubsub = new PubSub()

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
}

const prisma = new PrismaClient()
// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
          ...request,
          prisma,
          pubsub
        }
      },
})


server.start(()=> console.log(`Server is running on http://192.168.147.110:4000`))

