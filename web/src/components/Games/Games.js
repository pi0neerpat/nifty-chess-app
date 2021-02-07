import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/GamesCell'

const DELETE_GAME_MUTATION = gql`
  mutation DeleteGameMutation($id: String!) {
    deleteGame(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const GamesList = ({ games }) => {
  const { addMessage } = useFlash()
  const [deleteGame] = useMutation(DELETE_GAME_MUTATION, {
    onCompleted: () => {
      addMessage('Game deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete game ' + id + '?')) {
      deleteGame({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Played at</th>
            <th>Minted at</th>
            <th>Moves</th>
            <th>Moves hash</th>
            <th>Black</th>
            <th>White</th>
            <th>User address</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{truncate(game.id)}</td>
              <td>{timeTag(game.createdAt)}</td>
              <td>{timeTag(game.updatedAt)}</td>
              <td>{timeTag(game.playedAt)}</td>
              <td>{timeTag(game.mintedAt)}</td>
              <td>{truncate(game.moves)}</td>
              <td>{truncate(game.movesHash)}</td>
              <td>{truncate(game.black)}</td>
              <td>{truncate(game.white)}</td>
              <td>{truncate(game.userAddress)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.game({ id: game.id })}
                    title={'Show game ' + game.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editGame({ id: game.id })}
                    title={'Edit game ' + game.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete game ' + game.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(game.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GamesList
