import { Link } from "gatsby"
import React, { useState } from "react"

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
  <Link to={link.url} class="text-center hover:border-b-2">{link.text}</Link>
)

const MenuButton = ({ active, setActive }) => (
  <button
    class="ml-auto md:hidden absolute top-8 right-8"
    onClick={() => setActive(!active)}
  >
    {active 
    ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    : <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>}
  </button>
)

const MobileMenu = ({ active, setActive }) => (
  <div class={`${active ? 'flex flex-col' : 'hidden'} md:hidden fixed right-0 p-16 bg-gray-900 text-white h-screen justify-center space-y-6 top-0`}>
    <MenuButton active={active} setActive={setActive} />
    {links.map((link, i) => <NavItem key={i} link={link} />)}
  </div>
)

export const NavBar = () => {
  const [active, setActive] = useState(false)

  return (
    <header class="fixed top-0 z-50 w-screen">
      <div class="text-gray-600 px-8 md:px-16">
        <div class="hidden md:flex flex-wrap mx-auto p-5 items-center">
          <nav class="flex flex-wrap justify-center ml-auto space-x-6 mr-6">
            {links.map((link, i) => <NavItem key={i} link={link} />)}
          </nav>
          <button class="inline-flex bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Resume
          </button>
        </div>
      </div>
      <MenuButton active={active} setActive={setActive} />
      <MobileMenu active={active} setActive={setActive} />
    </header>
  )
}
