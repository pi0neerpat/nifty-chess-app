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

const countMoves = (moves) => {
  console.log(moves)
  return 2
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Game = ({ game }) => {
  const { addMessage } = useFlash()

  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [gifSrc, setGifSrc] = React.useState(null)

  React.useEffect(() => {
    fetchGif()
  }, [])

  const fetchGif = async () => {
    const res = await fetch('https://pgn2gif.glitch.me/thing', {
      method: 'POST',
      body: JSON.stringify({ pgn: game.moves, movesHash: game.id }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const blob = await res.blob()
    setGifSrc(URL.createObjectURL(blob))
  }

  const [
    mintNFT,
    { loading: loadingMutation, error: errorMutation },
  ] = useMutation(MINT_GAME_MUTATION, {
    onCompleted: () => {
      setLoading(false)
      // navigate(routes.game({game.id}))
      addMessage('Minting complete!', { classes: 'rw-flash-success' })
    },
  })

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

    const tx = await nftContract.mint(id)
    const receipt = await tx.wait(0)

    createUser({ variables: { input } })
  }

  return (
    <>
      <div className="flex">
        <div className="flex-auto justify-items-center">
          <img src={gifSrc} />
        </div>
        <div className="flex-auto ">
          <div className="rw-segment">
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
                  <th>
                    <svg height="20" width="20" className="ml-6">
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke="black"
                        strokeWidth="2"
                        fill="black"
                      />
                    </svg>
                  </th>
                  <td>{game.black}</td>
                </tr>
                <tr>
                  <th>
                    <svg height="20" width="20" className="ml-6">
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke="black"
                        strokeWidth="2"
                        fill="white"
                      />
                    </svg>
                  </th>
                  <td>{game.white}</td>
                </tr>
                <tr>
                  <th>Winner</th>
                  <td>{game.winner}</td>
                </tr>
                <tr>
                  <th>Moves</th>
                  <td>{countMoves(game.moves)}</td>
                </tr>
                {game.externalUrl && (
                  <tr>
                    <th>Visit</th>
                    <td>
                      <a href={game.externalUrl} target="_blank">
                        Lichess.org
                      </a>
                    </td>
                  </tr>
                )}
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
          <nav className="rw-button-group mt-4">
            <a
              href="#"
              className="rw-button rw-button-blue"
              onClick={() => onMintClick(game.id)}
            >
              Save as NFT
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Game
