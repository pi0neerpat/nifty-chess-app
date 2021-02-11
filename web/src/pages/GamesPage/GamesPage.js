import GamesLayout from 'src/layouts/GamesLayout'
import GamesCell from 'src/components/GamesCell'

const GamesPage = ({ page }) => {
  return (
    <GamesLayout>
      <GamesCell page={page} />
    </GamesLayout>
  )
}

export default GamesPage
