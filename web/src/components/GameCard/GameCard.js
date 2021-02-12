import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const LOADING_GIF_SRC = '/skeleton.png'

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toLocaleString().split(',')[0]}
    </time>
  )
}

const GameCard = ({ game }) => {
  const { addMessage } = useFlash()

  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [gifSrc, setGifSrc] = React.useState(LOADING_GIF_SRC)

  React.useEffect(() => {
    fetchGif()
  }, [])

  const fetchGif = async () => {
    const res = await fetch('https://pgn2gif.glitch.me/tiny', {
      method: 'POST',
      body: JSON.stringify({ pgn: game.moves, movesHash: game.id }),
      // mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const blob = await res.blob()
    setGifSrc(URL.createObjectURL(blob))
  }

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden group">
      <Link to={routes.game({ id: game.id })}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <img className="w-full" src={gifSrc} />
        </div>
        <div className="text-left p-4 sm:p-5">
          <h1 className="sm:text-lg text-gray-900 font-semibold">
            <div className="flex">
              <svg height="20" width="20" className="mr-2 mt-1">
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
              <svg height="20" width="20" className="mr-2 mt-1">
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
          <p className="text-sm sm:text-base text-gray-700">
            {timeTag(game.playedAt)}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default GameCard
