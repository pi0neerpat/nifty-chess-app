import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
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

  return (
    <>
      <div className="justify-items-center">
        <div className="justify-items-center">
          <img src={gifSrc} />
        </div>
        <div className="">
          <div className="rw-segment">
            <table className="">
              <tbody>
                <tr>
                  <td>{timeTag(game.playedAt)}</td>
                </tr>
                <tr>
                  <th>
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
                  </th>
                  <td>{game.black}</td>
                </tr>
                <tr>
                  <th>
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
                  </th>
                  <td>{game.white}</td>
                </tr>
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
      </div>
    </>
  )
}

export default GameCard
