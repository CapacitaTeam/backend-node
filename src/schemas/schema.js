import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/resolver';
import { typeUser } from './typeUser';
import { typeCatalog } from './typeCatalog';

// Definición de type
const typeDefs = `
  type Query {    
    catalogues: [Catalogue]
    users: [User]
  }
  ${ typeCatalog }  
  ${ typeUser }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});