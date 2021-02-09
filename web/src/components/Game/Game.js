import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { useAuth } from '@redwoodjs/auth'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'

import CONTRACTS from 'src/utils/contracts'

import { QUERY } from 'src/components/GamesCell'

const MINT_GAME_MUTATION = gql`
  mutation MintGameMutation($id: String!) {
    mintGame(id: $id) {
      transactionHash
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

  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const onMintClick = async (id) => {
    setLoading(true)
    const walletProvider = new Web3Provider(window.ethereum)
    const signer = walletProvider.getSigner()
    const network = await walletProvider.getNetwork()
    const nftContract = new Contract(
      CONTRACTS['nft'][network.name],
      CONTRACTS['nft'].abi,
      signer
    )

    const tx = await contract.mint(id)
    // Do mutation to store transaction hash

    setLoading(false)
    addMessage('Flow created.', { classes: 'rw-flash-success' })
  }

  return (
    <>
      <div className="flex">
        <div className="flex-auto">
          <img src="" />
          GIF of game
        </div>
        <div className="rw-segment flex-auto">
          <header className="rw-segment-header">
            <h2 className="rw-heading rw-heading-secondary">Details</h2>
          </header>
          <table className="rw-table">
            <tbody>
              <tr>
                <th>Date</th>
                <td>{timeTag(game.playedAt)}</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{game.location}</td>
              </tr>
              <tr>
                <th>Black</th>
                <td>{game.black}</td>
              </tr>
              <tr>
                <th>White</th>
                <td>{game.white}</td>
              </tr>
              <tr>
                <th>Winner</th>
                <td>{game.whiteWins ? 'White' : 'Black'}</td>
              </tr>
              {game.mintedAt && (
                <tr>
                  <th>Minted</th>
                  <td>{timeTag(game.mintedAt)}</td>
                </tr>
              )}
              {game.mintedAt && (
                <tr>
                  <th>Minter</th>
                  <td>{game.minterAddress}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <nav className="rw-button-group mt-4">
        <a
          href="#"
          className="rw-button rw-button-blue"
          onClick={() => onMintClick(game.id)}
        >
          Mint
        </a>
      </nav>
    </>
  )
}

export default Game
