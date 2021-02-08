export const schema = gql`
  type Game {
    id: String!
    publicId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    playedAt: DateTime!
    mintedAt: DateTime!
    moves: String!
    movesHash: String!
    black: String!
    white: String!
    minter: User
    userAddress: String
  }

  type Query {
    games: [Game!]!
    game(id: String!): Game
  }

  input CreateGameInput {
    publicId: String!
  }

  type Mutation {
    createGame(input: CreateGameInput!): Game!
    updateGame(id: String!, input: UpdateGameInput!): Game!
    deleteGame(id: String!): Game!
  }
`
