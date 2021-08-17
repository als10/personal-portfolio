import React, {useState} from "react"
import scrollTo from 'gatsby-plugin-smoothscroll'
import {Socials} from "./Socials"
import Resume from "../static/Resume.pdf"

const sections = [
    'About',
    'Experience',
    'Projects',
    'Skills'
]

const DarkModeToggle = ({darkMode, toggleTheme}) => (
    <button
        onClick={toggleTheme}
        class="mr-auto"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32"
             stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={darkMode
                    ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}
            />
        </svg>
    </button>
)

const NavItem = ({text}) => (
    <button
        onClick={() => scrollTo(`#${text.toLowerCase()}`)}
        class="text-center hover:border-b-2"
    >
        {text}
    </button>
)

const navItemsList = sections.map((s, i) => <NavItem key={i} text={s}/>)

const MenuButton = ({menuActive, setMenuActive}) => (
    <button
        class="inline-flex z-50 md:hidden"
        onClick={() => setMenuActive(!menuActive)}
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 32 32"
             stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuActive
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"}/>
        </svg>
    </button>
)

const MobileMenu = ({menuActive, setMenuActive}) => (
    <div
        class={`${menuActive ? 'flex flex-col' : 'hidden'} absolute md:hidden fixed right-0 p-16 bg-gray-900 text-white h-screen justify-center space-y-6 top-0`}>
        {navItemsList}
        <ResumeButton/>
        <Socials/>
    </div>
)

const ResumeButton = () => (
    <a
        className="md:inline-flex text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 py-1 px-3 hover:bg-gray-200 dark:hover:bg-gray-400 rounded text-center"
        href={Resume}
        target="_blank">
        Resume
    </a>
)

export const NavBar = ({darkMode, toggleTheme}) => {
    const [menuActive, setMenuActive] = useState(false)
    const [bgActive, setBgActive] = useState(false)

    typeof window !== "undefined"
    && window.addEventListener('scroll', () => setBgActive(window.scrollY >= 80))

    return (
        <header class={`fixed top-0 z-50 w-screen ${bgActive && "bg-white dark:bg-black"}`}>
            <div class="px-8 md:px-16 text-gray-600 dark:text-gray-200 xl:text-md">
                <div class="flex flex-wrap mx-auto p-5 items-center">
                    <DarkModeToggle darkMode={darkMode} toggleTheme={toggleTheme}/>
                    <nav class="hidden md:flex flex-wrap justify-center ml-auto space-x-6 mr-6">
                        {navItemsList}
                    </nav>
                    <div class="hidden md:block">
                        <ResumeButton />
                    </div>
                    <MenuButton menuActive={menuActive} setMenuActive={setMenuActive}/>
                </div>
            </div>
            <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive}/>
        </header>
    )
}
