import { Link } from "gatsby"
import * as React from "react"

const links = [
  {
    url: '#about',
    text: 'About'
  },
  {
    url: '#experience',
    text: 'Experience'
  },
  {
    url: '#projects',
    text: 'Projects'
  },
  {
    url: '#skills',
    text: 'Skills'
  },
]

const NavItem = ({ link }) => (
  <Link to={link.url} class="mr-5 hover:text-gray-900">{link.text}</Link>
)

export const NavBar = () => (
  <header class="text-gray-600">
    <div class="container mx-auto flex-wrap p-5 hidden md:flex items-center">
      <nav class="md:ml-auto flex flex-wrap text-base justify-center">
        {links.map((link, i) => <NavItem key={i} link={link} />)}
      </nav>
      <button class="inline-flex bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Resume
      </button>
    </div>
  </header>
)
