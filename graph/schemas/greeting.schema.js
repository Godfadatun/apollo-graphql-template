const typeDefs = `#graphql
schema {
    query: Query
}

type Query {
        greeting: String
    }
`;

export default typeDefs;
