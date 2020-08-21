import { psql } from '../psqlAdapter';

const catalogueFunctions = {

    getAllCatalogues: () => {
        const cataloguesData = 'select id, name, description from catalogue';
        return psql.manyOrNone(cataloguesData);
    }
}

module.exports = {
    catalogueFunctions
}