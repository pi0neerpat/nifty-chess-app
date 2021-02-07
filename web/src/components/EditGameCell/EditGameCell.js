import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import GameForm from 'src/components/GameForm'

export const QUERY = gql`
  query FIND_GAME_BY_ID($id: String!) {
    game: game(id: $id) {
      id
      createdAt
      updatedAt
      playedAt
      mintedAt
      moves
      movesHash
      black
      white
      userAddress
    }
  }
`
const UPDATE_GAME_MUTATION = gql`
  mutation UpdateGameMutation($id: String!, $input: UpdateGameInput!) {
    updateGame(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      playedAt
      mintedAt
      moves
      movesHash
      black
      white
      userAddress
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ game }) => {
  const { addMessage } = useFlash()
  const [updateGame, { loading, error }] = useMutation(UPDATE_GAME_MUTATION, {
    onCompleted: () => {
      navigate(routes.games())
      addMessage('Game updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateGame({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Game {game.id}</h2>
      </header>
      <div className="rw-segment-main">
        <GameForm game={game} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
