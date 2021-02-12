import { routes, navigate, Link } from '@redwoodjs/router'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'
import { donateFlow } from 'src/utils/superfluid'
import { toast } from 'react-hot-toast'

const onDonateFlow = async () => {
  const { error } = await donateFlow()
  if (error) toast.error(error.message)
}

const FooterLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="inline-block pl-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </li>
  )
}

const Footer = () => (
  <footer className="container py-12 md:flex md:items-center md:justify-between max-w-7xl mx-auto px-4 sm:px-6">
    <ul className="flex justify-center md:order-2">
      <FooterLink
        href={'https://twitter.com/cupOJoseph'}
        icon={FaTwitter}
        label="Twitter"
      />
    </ul>
    <ul className="flex justify-center md:order-2">
      <button onClick={onDonateFlow}>Donate with Superfluid</button>
    </ul>
    <div className="mt-8 md:mt-0 md:order-1">
      <p className="text-center text-sm md:text-base text-gray-700">
        ©{new Date().getFullYear()} Nifty Chess
      </p>
    </div>
  </footer>
)
export default Footer
