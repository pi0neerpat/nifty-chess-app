import { routes, navigate, Link } from '@redwoodjs/router'
import logo from './logo.png'
const Footer = () => (
  <footer className="bg-white">
    <div className="container mx-auto  px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6">
          <Link to="home">
            <img src={logo} className="h-28 mb-2" />
          </Link>
          ©{new Date().getFullYear()} Nifty Chess
        </div>

        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Social</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com/pi0neerpat"
                target="_blank"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Company</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)
export default Footer
