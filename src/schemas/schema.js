import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/resolver';
import { typeUser, queriesDefUser, mutationsDefUser } from './typeUser';
import { typeCatalogue, queriesDefCatalogue } from './typeCatalogue';
import { mutationsAuth } from './typeAuth';
import { typeQuestionQuiz, queriesDefQuestionQuiz, mutationsDefQuestionQuiz } from './typeQuestionQuiz';

// Definición de type
const typeDefs = `
  type Query {    
    ${queriesDefCatalogue}
    ${queriesDefUser}    
    ${queriesDefQuestionQuiz}
  }
  type Mutation {
    ${mutationsDefUser}
    ${mutationsAuth}
    ${mutationsDefQuestionQuiz}
  }

  ${typeCatalogue}  
  ${typeUser}
  ${typeQuestionQuiz}
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});