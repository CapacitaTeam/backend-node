const typeUser = `type User {
    id: Int
    firstname: String
    lastname: String    
    username: String
    password: String
    status: Boolean
    id_role:Int
    createdat: String
    token: String
  }`

const queriesDefUser = `
    users: [User]
    user(id: Int!): [User]
  `;

const mutationsDefUser = `  
  createUser(id: Int, firstname: String!, lastname: String!, username: String!, password: String, status: Boolean!, id_role:Int!): User
  updateUser(id: Int!, firstname: String!, lastname: String!, status: Boolean!): User
  updateStatusUser(id: Int!, status: Boolean!): User
  `;

module.exports = {
  typeUser,
  queriesDefUser,
  mutationsDefUser
}