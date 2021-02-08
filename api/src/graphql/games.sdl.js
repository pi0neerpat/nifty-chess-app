export const schema = gql`
  type Game {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    playedAt: DateTime!
    mintedAt: DateTime
    minter: User
    minterAddress: String
    tokenId Integer?
    externalUrl String
    location: String!
    event: String
    moves: String!
    black: String!
    white: String!
    whiteWins: Boolean!
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
