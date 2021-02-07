import { Link, routes } from '@redwoodjs/router'

const LoginPage = () => {
  return (
    <>
      <h1>LoginPage</h1>
      <p>
        Find me in <code>./web/src/pages/LoginPage/LoginPage.js</code>
      </p>
      <p>
        My default route is named <code>login</code>, link to me with `
        <Link to={routes.login()}>Login</Link>`
      </p>
    </>
  )
}

export default LoginPage
