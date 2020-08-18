import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from'../resolvers/resolver'; 

// Definición de type
const typeDefs = `
  type Query {    
    catalogues: [Catalogue]
  }

  type Catalogue {
    id: ID!
    description: String
  }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});