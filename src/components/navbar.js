import React, { useState } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll'

const sections = [
  'About',
  'Experience',
  'Projects',
  'Skills'
]

const NavItem = ({ text }) => (
  <button
    onClick={() => scrollTo(`#${text.toLowerCase()}`)}
    class="text-center hover:border-b-2"
  >
    {text}
  </button>
)

const navItemsList = sections.map((s, i) => <NavItem key={i} text={s} />)

const MenuButton = ({ menuActive, setMenuActive }) => (
  <button
    class="ml-auto md:hidden absolute top-8 right-8"
    onClick={() => setMenuActive(!menuActive)}
  >
    {menuActive 
    ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    : <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>}
  </button>
)

const MobileMenu = ({ menuActive, setMenuActive }) => (
  <div class={`${menuActive ? 'flex flex-col' : 'hidden'} md:hidden fixed right-0 p-16 bg-gray-900 text-white h-screen justify-center space-y-6 top-0`}>
    <MenuButton menuActive={menuActive} setMenuActive={setMenuActive} />
    {navItemsList}
  </div>
)

export const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <header class="fixed top-0 z-50 w-screen bg-white">
      <div class="px-8 md:px-16 text-gray-600">
        <div class="hidden md:flex flex-wrap mx-auto p-5 items-center">
          <nav class="flex flex-wrap justify-center ml-auto space-x-6 mr-6">
            {navItemsList}
          </nav>
          <button class="inline-flex text-gray-600 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Resume
          </button>
        </div>
      </div>
      <MenuButton menuActive={menuActive} setMenuActive={setMenuActive} />
      <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
    </header>
  )
}
