import { Link, routes } from '@redwoodjs/router'

import Pagination from 'src/components/Pagination'
import GameCard from 'src/components/GameCard'

const GAMES_PER_PAGE = 4

export const QUERY = gql`
  query GAME_PAGE($page: Int) {
    gamePage(page: $page) {
      games {
        id
        createdAt
        updatedAt
        playedAt
        mintedAt
        moves
        black
        white
        externalUrl
      }
      count
    }
  }
`

export const beforeQuery = ({ page }) => {
  page = page ? parseInt(page, 10) : 1
  return { variables: { page } }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No games yet. '}
      <Link to={routes.newGame()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ gamePage, page, perPage }) => {
  page = page ? parseInt(page, 10) : 1
  return (
    <>
      {gamePage.games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      <Pagination count={gamePage.count} perPage={GAMES_PER_PAGE} page={page} />
    </>
  )
}
