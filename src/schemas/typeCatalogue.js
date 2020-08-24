const typeCatalogue = `
type Catalogue {
    id: ID!
    name: String
    description: String
  }
`;

const queriesDefCatalogue = `
  catalogues: [Catalogue]
`;

module.exports = {
  typeCatalogue,
  queriesDefCatalogue
}