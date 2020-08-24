import { catalogueFunctions } from '../controllers/controller.catalogues';
const { getAllCatalogues } = catalogueFunctions;

const queriesTypeCatalogue = {
    catalogues: async () => {
        return await getAllCatalogues();
    }
}

module.exports = {
    queriesTypeCatalogue
}