import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/resolver';
import { typeUser, queriesDefUser, mutationsDefUser } from './typeUser';
import { typeCatalogue, queriesDefCatalogue } from './typeCatalogue';
import { mutationsAuth } from './typeAuth';
import { typeQuestionQuiz, queriesDefQuestionQuiz } from './typeQuestionQuiz';
import { typeAnswerQuiz, queriesDefAnswerQuiz } from './typeAnswerQuiz';

// Definición de type
const typeDefs = `
  type Query {    
    ${queriesDefCatalogue}
    ${queriesDefUser}    
    ${queriesDefQuestionQuiz}
    ${queriesDefAnswerQuiz}
  }
  type Mutation {
    ${mutationsDefUser}
    ${mutationsAuth}
  }

  ${typeCatalogue}  
  ${typeUser}
  ${typeQuestionQuiz}
  ${typeAnswerQuiz}
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});