import * as React from "react"
import {Footer} from "./footer"
import {Navbar} from "./navbar"

export const Layout = ({darkMode, toggleTheme, children}) => (
    <div class="dark:bg-black dark:text-white">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme}/>
        <div class="px-12 lg:px-16">
            {children}
        </div>
        <Footer/>
    </div>
)
