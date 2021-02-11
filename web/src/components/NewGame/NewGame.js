import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import GameForm from 'src/components/GameForm'

import { QUERY } from 'src/components/GamesCell'

const CREATE_GAME_MUTATION = gql`
  mutation CreateGameMutation($input: CreateGameInput!) {
    createGame(input: $input) {
      id
    }
  }
`

const NewGame = () => {
  const { addMessage } = useFlash()
  const [createGame, { loading, error }] = useMutation(CREATE_GAME_MUTATION, {
    onCompleted: ({ createGame: { id } }) => {
      navigate(routes.game({ id }))
      addMessage('Game created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createGame({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Game</h2>
      </header>
      <div className="rw-segment-main">
        <GameForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewGame
