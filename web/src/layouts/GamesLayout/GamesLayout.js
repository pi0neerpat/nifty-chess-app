import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const GamesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.games()} className="rw-link">
            Games
          </Link>
        </h1>
        <Link to={routes.newGame()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> Add Your Game
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default GamesLayout
