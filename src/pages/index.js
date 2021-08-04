import * as React from "react"
import {Layout} from "../components/Layout"
import {Landing} from "../components/Landing"
import {About} from "../components/About"
import {Experience} from "../components/Experience"
import {Projects} from "../components/Projects"
import {Skills} from "../components/Skills"

export default () => (
    <Layout>
        <Landing/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
    </Layout>
)

