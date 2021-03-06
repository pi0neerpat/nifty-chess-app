export const schema = gql`
  type User {
    address: String!
    authDetail: AuthDetail!
    gamesMinted: [Game]!
    authDetailId: String!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
  }

  input CreateUserInput {
    address: String!
    authDetailId: String!
  }

  input UpdateUserInput {
    address: String
    authDetailId: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
