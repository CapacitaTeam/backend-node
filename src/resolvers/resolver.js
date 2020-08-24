import { queriesTypeCatalogue } from '../queries/queriesTypeCatalogue';
import { queriesTypeUser } from '../queries/queriesTypeUser';
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
    },
    Mutation: {
        ...mutationsTypeUser
        ,
        ...mutationsTypeAuth
    }
};