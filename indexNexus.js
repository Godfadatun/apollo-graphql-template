import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeSchema, queryType } from 'nexus'

const port = Number(process.env.NEXUSPORT) || 9000;

const Query = queryType({
    definition: (t) => {
        t.string('greeting', {
            resolve: () => 'Yo World!',
        });
    }
})

const schema = makeSchema({ types: [Query] });

// Use Nexus as a separate folder call it api/schema
const startApolloServer = async() => {
    const server = new ApolloServer({ schema });
    const { url } = await startStandaloneServer(server, { listen: { port } });
    console.log(`Starting Apollo Server on port ${url}`);
}

startApolloServer().catch((err) => {
    console.error('Error starting Apollo Server:', err);
});

