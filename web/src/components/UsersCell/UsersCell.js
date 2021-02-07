import { Link, routes } from '@redwoodjs/router'

import Users from 'src/components/Users'

export const QUERY = gql`
  query USERS {
    users {
      address
      authDetailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="rw-text-center">{'No users yet. '}</div>
}

export const Success = ({ users }) => {
  return <Users users={users} />
}
