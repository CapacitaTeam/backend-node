const typeUser = `type User {
    id: Int
    firstname: String!
    lastname: String!    
    username: String!
    password: String!
    token: String
  }`

const queriesDefUser = `
    users: [User]
  `;

const mutationsDefUser = `
  updateUser(id: Int!, firstname: String!, lastname: String!, username: String!, password: String!): User
  createUser(id: Int, firstname: String!, lastname: String!, username: String!, password: String!): User
`;

module.exports = {
  typeUser,
  queriesDefUser,
  mutationsDefUser
}