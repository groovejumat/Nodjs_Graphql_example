const { GraphQLServer } = require('graphql-yoga')

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
        feed: () => links,
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    },
}

// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})
server.start(()=> console.log(`Server is running on http://192.168.147.110:4000`))

