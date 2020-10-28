import { queriesTypeCatalogue } from '../queries/queriesTypeCatalogue';
import { queriesTypeUser } from '../queries/queriesTypeUser';
import { queriesTypeQuestionQuiz } from '../queries/queriesTypeQuestionQuiz';
import { mutationsTypeUser } from '../mutations/mutationsTypeUser';
import { mutationsTypeAuth } from '../mutations/mutationsTypeAuth';
import { mutationsTypeQuestionQuiz } from '../mutations/mutationsTypeQuestionQuiz';

// Debe coincidir con el type es el schema
// Una función por cada endpoint
export const resolvers = {
    Query: {
        // Catalogues
        ...queriesTypeCatalogue
        ,
        //Users
        ...queriesTypeUser
        ,
        //Preguntas Quiz
        ...queriesTypeQuestionQuiz
    },
    Mutation: {
        ...mutationsTypeUser
        ,
        ...mutationsTypeAuth
        ,
        ...mutationsTypeQuestionQuiz
    }
};