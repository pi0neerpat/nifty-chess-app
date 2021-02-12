import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

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
  const [gifSrc, setGifSrc] = React.useState(null)

  React.useEffect(() => {
    fetchGif()
  }, [])

  const fetchGif = async () => {
    // const res = await fetch('https://pgn2gif.glitch.me/thing', {
    //   method: 'POST',
    //   body: JSON.stringify({ pgn: game.moves, movesHash: game.id }),
    //   // mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // const blob = await res.blob()
    // setGifSrc(URL.createObjectURL(blob))
    setGifSrc(
      'https://gatsby-contentful-portfolio.netlify.app/static/b4a22f4943d8109a73c845e7521def69/c1c70/spain2.jpg'
    )
  }

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden group">
      <Link to={routes.game({ id: game.id })}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <img src={gifSrc} />
        </div>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg text-gray-900 font-semibold">
            <svg height="20" width="20" className="">
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="black"
                strokeWidth="2"
                fill="black"
              />
            </svg>
            {game.black}

            <svg height="20" width="20" className="">
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
