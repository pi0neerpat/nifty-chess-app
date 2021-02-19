import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'

import toast from 'react-hot-toast'

import { mint } from 'src/utils/niftyChess'
import CONTRACTS from 'src/utils/contracts'

import { QUERY } from 'src/components/GamesCell'
import { truncate } from 'src/utils/general'
import { BLOCKSCOUT_URL } from 'src/utils/constants'

const LOADING_GIF_SRC = '/skeleton.png'

const MINT_GAME_MUTATION = gql`
  mutation MintGameMutation($id: String!) {
    mintGame(id: $id) {
      transactionHash
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toLocaleString().split(',')[0]}
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
  const [gifSrc, setGifSrc] = React.useState(LOADING_GIF_SRC)

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
    const { tx, error } = await mint({ id })
    if (error) {
      console.log(error.message)
      toast.error(error.message)
      setLoading(false)
      return
    }
    toast.promise(tx.wait(), {
      loading: 'Minting...',
      success: <b>Minted!</b>,
      error: (err) => {
        setLoading(false)
        console.log(err)
        return <b>Something went wrong. {err?.message}</b>
      },
    })
  }
  return (
    <div className="bg-gray-0 py-12 lg:py-16">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 pb-8">
            <img src={gifSrc} className="w-full" />
          </div>
          <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12">
            <h1 className=" text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
              <div className="flex">
                <svg height="20" width="20" className="mr-2 mt-3">
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="black"
                    strokeWidth="2"
                    fill="black"
                  />
                </svg>
                {game.black}{' '}
              </div>
              <div className="flex">
                <svg height="20" width="20" className="mr-2 mt-3">
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="black"
                    strokeWidth="2"
                    fill="white"
                  />
                </svg>
                {game.white}
              </div>
            </h1>
            <div className="mt-5">
              <h2 className=" text-xl leading-tight font-semibold tracking-tight text-blue sm:text-2xl">
                {timeTag(game.playedAt)}
              </h2>
            </div>
            <div className="my-4 text-base text-gray-700 whitespace-pre-line">
              Winner - {game.winner}
              <br />
              Location - {game.location}
              {game.moveCount && (
                <>
                  <br />
                  Moves - {game.moveCount}
                </>
              )}
              {game.event && (
                <>
                  <br />
                  Event - {game.event}
                </>
              )}
              {game.externalUrl && (
                <>
                  <br />{' '}
                  <a href={game.externalUrl} target="_blank">
                    Lichess.org
                  </a>
                </>
              )}
              <br />
              {game.mintedAt && (
                <>
                  <br />
                  Minted: {timeTag(game.mintedAt)}
                </>
              )}
              {game.tokenId > 0 && (
                <>
                  <br />
                  Token ID: {game.tokenId}
                </>
              )}
              {game.ownerAddress && (
                <>
                  <br />
                  Owner:{' '}
                  <a
                    href={`${BLOCKSCOUT_URL}${game.ownerAddress}`}
                    target="_blank"
                  >
                    {truncate(game.ownerAddress, 7)}
                  </a>
                </>
              )}
              {!game.ownerAddress && (
                <div className="mt-8">
                  <button
                    disabled={loading}
                    className="w-full rw-button rw-button-blue"
                    onClick={() => onMintClick(game.id)}
                  >
                    Mint NFT (xDAI)
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
