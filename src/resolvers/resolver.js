import { psql } from '../psqlAdapter';

// Debe coincidir con el type es el schema
// Una función por cada endpoint
export const resolvers = {
    Query: {
        catalogues(_, args, ctx) {
            const catalogos = 'select id, description from catalogue';
            return psql.manyOrNone(catalogos);
        }
    }
};