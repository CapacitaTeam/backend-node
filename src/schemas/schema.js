import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/resolver';
import { typeUser, queriesDefUser, mutationsDefUser } from './typeUser';
import { typeCatalogue, queriesDefCatalogue } from './typeCatalogue';
import { mutationsAuth } from './typeAuth';

// Definición de type
const typeDefs = `
  type Query {    
    ${queriesDefCatalogue}
    ${queriesDefUser}
  }
  type Mutation {
    ${mutationsDefUser}
    ${mutationsAuth}
  }
  ${ typeCatalogue}  
  ${ typeUser}
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});