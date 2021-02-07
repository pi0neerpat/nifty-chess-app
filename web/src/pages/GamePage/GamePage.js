import GamesLayout from 'src/layouts/GamesLayout'
import GameCell from 'src/components/GameCell'

const GamePage = ({ id }) => {
  return (
    <GamesLayout>
      <GameCell id={id} />
    </GamesLayout>
  )
}

export default GamePage
