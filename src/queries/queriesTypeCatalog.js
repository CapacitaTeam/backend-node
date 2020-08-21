import { catalogueFunctions } from '../controllers/controller.catalogues';
const { getAllCatalogues } = catalogueFunctions;

const queriesTypeCatalog = {
    catalogues: async () => {
        return await getAllCatalogues();
    }
}

module.exports = {
    queriesTypeCatalog
}