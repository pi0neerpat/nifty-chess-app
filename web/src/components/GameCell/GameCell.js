import Game from 'src/components/Game'

export const QUERY = gql`
  query FIND_GAME_BY_ID($id: String!) {
    game: game(id: $id) {
      id
      createdAt
      updatedAt
      playedAt
      mintedAt
      minterAddress
      tokenId
      externalUrl
      location
      event
      moves
      black
      white
      whiteWins
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Game not found</div>

export const Success = ({ game }) => {
  return <Game game={game} />
}
