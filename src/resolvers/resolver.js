import { queriesTypeCatalogue } from '../queries/queriesTypeCatalogue';
import { queriesTypeUser } from '../queries/queriesTypeUser';
import { queriesTypeQuestionQuiz } from '../queries/queriesTypeQuestionQuiz';
import { queriesTypeAnswerQuiz } from '../queries/queriesTypeAnswerQuiz';
import { mutationsTypeUser } from '../mutations/mutationsTypeUser';
import { mutationsTypeAuth } from '../mutations/mutationsTypeAuth';

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
        ,
        //Respuestas Quiz
        ...queriesTypeAnswerQuiz
    },
    Mutation: {
        ...mutationsTypeUser
        ,
        ...mutationsTypeAuth
    }
};