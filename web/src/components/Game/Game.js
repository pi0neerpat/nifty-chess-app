import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/GamesCell'

const DELETE_GAME_MUTATION = gql`
  mutation DeleteGameMutation($id: String!) {
    deleteGame(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Game = ({ game }) => {
  const { addMessage } = useFlash()
  const [deleteGame] = useMutation(DELETE_GAME_MUTATION, {
    onCompleted: () => {
      navigate(routes.games())
      addMessage('Game deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete game ' + id + '?')) {
      deleteGame({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Game {game.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{game.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(game.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(game.updatedAt)}</td>
            </tr>
            <tr>
              <th>Played at</th>
              <td>{timeTag(game.playedAt)}</td>
            </tr>
            <tr>
              <th>Minted at</th>
              <td>{timeTag(game.mintedAt)}</td>
            </tr>
            <tr>
              <th>Moves</th>
              <td>{game.moves}</td>
            </tr>

            <tr>
              <th>Black</th>
              <td>{game.black}</td>
            </tr>
            <tr>
              <th>White</th>
              <td>{game.white}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGame({ id: game.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(game.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Game
