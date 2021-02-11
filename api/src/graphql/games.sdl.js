export const schema = gql`
  type Game {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    playedAt: DateTime!
    mintedAt: String
    minter: User
    minterAddress: String
    tokenId: Int
    externalUrl: String
    location: String!
    event: String
    moves: String!
    moveCount: Int!
    black: String!
    white: String!
    winner: String!
  }

  type Query {
    games: [Game!]!
    game(id: String!): Game
  }

  input CreateGameInput {
    externalUrl: String!
  }

  type Mutation {
    createGame(input: CreateGameInput!): Game!
  }
`
