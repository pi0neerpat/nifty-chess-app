import { routes, navigate, Link } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import banner from './banner.png'
import Footer from './Footer'

const DefaultLayout = ({ children }) => {
  const [isLoggingIn, setIsLoggingIn] = React.useState(false)
  const { isAuthenticated, currentUser, logOut, logIn } = useAuth()

  const onLogOut = () => {
    logOut()
    navigate(routes.home())
  }

  const onLogIn = async () => {
    setIsLoggingIn(true)
    await logIn()
    setIsLoggingIn(false)
  }

  const truncate = (text, length = 50) => {
    if (typeof text !== 'string') return ''
    return text.substring(0, length) + '...'
  }

  const loginButton = isAuthenticated ? (
    <>
      <button
        onClick={() => navigate(routes.user({ id: currentUser.id }))}
        to="login"
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple hover:bg-purple-dark"
      >
        {truncate(currentUser?.address, 7)}
      </button>
      <button onClick={onLogOut}>Logout</button>
    </>
  ) : (
    <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
      <button
        disabled={isLoggingIn}
        onClick={() => onLogIn()}
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple hover:bg-purple-dark"
      >
        {isLoggingIn ? 'Logging in...' : 'Log in'}
      </button>
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img className="h-12" src={banner} />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-grow relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {React.cloneElement(children, { useAuth })}
        </div>
      </div>
      <Footer className="relative" />
    </div>
  )
}

export default DefaultLayout
