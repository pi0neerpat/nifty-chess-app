import { Link, routes } from '@redwoodjs/router'

import Pagination from 'src/components/Pagination'
import GameCard from 'src/components/GameCard'

const GAMES_PER_PAGE = 9

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
    <div className="container text-center">
      <div className="flex flex-wrap -mx-3 lg:-mx-6">
        {gamePage.games.map((game) => (
          <div key={game.id} className="w-full sm:w-1/2 lg:w-1/3 p-3 md:p-6">
            <GameCard game={game} />
          </div>
        ))}
      </div>
      <div>
        <Pagination
          count={gamePage.count}
          perPage={GAMES_PER_PAGE}
          page={page}
        />
      </div>
    </div>
  )
}
