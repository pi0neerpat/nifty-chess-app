import GamesLayout from 'src/layouts/GamesLayout'
import EditGameCell from 'src/components/EditGameCell'

const EditGamePage = ({ id }) => {
  return (
    <GamesLayout>
      <EditGameCell id={id} />
    </GamesLayout>
  )
}

export default EditGamePage
