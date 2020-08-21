import { queriesTypeCatalog } from '../queries/queriesTypeCatalog';
import { queriesTypeUser } from '../queries/queriesTypeUser';

// Debe coincidir con el type es el schema
// Una función por cada endpoint
export const resolvers = {
    Query: {
        // Catalogues
        ...queriesTypeCatalog
        ,
        //Users
        ...queriesTypeUser
    }
};