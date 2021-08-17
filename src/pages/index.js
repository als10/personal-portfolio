import React, {useState} from "react"
import Layout from "../components/layout"
import Landing from "../components/sections/landing"
import About from "../components/sections/about"
import Experience from "../components/sections/experience"
import Projects from "../components/sections/projects"
import Skills from "../components/sections/skills"

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

