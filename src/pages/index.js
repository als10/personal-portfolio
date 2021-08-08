import React, {useState} from "react"
import {Layout} from "../components/Layout"
import {Landing} from "../components/Landing"
import {About} from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import {Skills} from "../components/Skills"

export default () => {
    const [darkMode, setDarkMode] = useState(
        typeof localStorage !== "undefined" && (localStorage.theme === 'dark' || (!('theme' in localStorage) && typeof window !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches))
    )

    const toggleTheme = () => {
        console.log(darkMode)
        if (localStorage) localStorage.theme = darkMode ? 'light' : 'dark'
        setDarkMode(!darkMode)
    }

    return <html class={darkMode ? 'dark' : ''}>
    <Layout darkMode={darkMode} toggleTheme={toggleTheme}>
        <Landing/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
    </Layout>
    </html>
}

