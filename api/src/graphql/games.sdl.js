export const schema = gql`
  type Game {
    id: String!
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
    playedAt: DateTime!
    mintedAt: DateTime!
    moves: String!
    movesHash: String!
    black: String!
    white: String!
    userAddress: String
  }

  input UpdateGameInput {
    playedAt: DateTime
    mintedAt: DateTime
    moves: String
    movesHash: String
    black: String
    white: String
    userAddress: String
  }

  type Mutation {
    createGame(input: CreateGameInput!): Game!
    updateGame(id: String!, input: UpdateGameInput!): Game!
    deleteGame(id: String!): Game!
  }
`