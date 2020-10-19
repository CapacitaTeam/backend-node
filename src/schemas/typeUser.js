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
  createUser(id: Int, firstname: String!, lastname: String!, username: String!, password: String!, status: Boolean!): User
  updateUser(id: Int!, firstname: String!, lastname: String!, status: Boolean!): User
  updateStatusUser(id: Int!, status: Boolean!): User
  `;

module.exports = {
  typeUser,
  queriesDefUser,
  mutationsDefUser
}