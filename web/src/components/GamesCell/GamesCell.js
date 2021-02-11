import { Link, routes } from '@redwoodjs/router'

import Games from 'src/components/Games'

export const QUERY = gql`
  query GAMES {
    games(filter: { first: 100 }) {
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
  }
`

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

export const Success = ({ games }) => {
  return <Games games={games} />
}
