const typeUser = `type User {
    id: Int
    firstname: String!
    lastname: String!    
    username: String!
    password: String!
    status: Boolean!
    createdat: String
    token: String
  }`

const queriesDefUser = `
    users: [User]
  `;

const mutationsDefUser = `
  updateUser(id: Int!, firstname: String!, lastname: String!, username: String!, password: String!, status: Boolean!): User
  createUser(id: Int, firstname: String!, lastname: String!, username: String!, password: String!, status: Boolean!): User
`;

module.exports = {
  typeUser,
  queriesDefUser,
  mutationsDefUser
}