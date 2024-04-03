import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const port = Number(process.env.PORT) || 9000;

const typeDefs = `#graphql
schema {
    query: Query
}
type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => 'Yo World!',
    },
};

const startApolloServer = async() => {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, { listen: { port } });
    console.log(`Starting Apollo Server on port ${url}`);
}

startApolloServer().catch((err) => {
    console.error('Error starting Apollo Server:', err);
});

