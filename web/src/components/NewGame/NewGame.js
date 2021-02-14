import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import GameForm from 'src/components/GameForm'

import toast from 'react-hot-toast'
import { QUERY } from 'src/components/GamesCell'

const CREATE_GAME_MUTATION = gql`
  mutation CreateGameMutation($input: CreateGameInput!) {
    createGame(input: $input) {
      id
    }
  }
`

const NewGame = () => {
  const [createGame, { loading, error }] = useMutation(CREATE_GAME_MUTATION, {
    onCompleted: ({ createGame: { id } }) => {
      navigate(routes.game({ id }))
      toast.success('NFT generated')
    },
  })

  const onSave = (input) => {
    createGame({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Create a GIF</h2>
      </header>
      <div className="rw-segment-main">
        <GameForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewGame
