const typeUser = `type User {
    id: Int
    firstname: String
    lastname: String    
    username: String
    password: String
    status: Boolean
    createdat: String
    token: String
  }`

const queriesDefUser = `
    users: [User]
    user(id: Int!): [User]
  `;

const mutationsDefUser = `
  updateUser(id: Int!, firstname: String!, lastname: String!, status: Boolean!): User
  createUser(id: Int, firstname: String!, lastname: String!, username: String!, password: String!, status: Boolean!): User
`;

module.exports = {
  typeUser,
  queriesDefUser,
  mutationsDefUser
}