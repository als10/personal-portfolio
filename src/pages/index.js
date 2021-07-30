import * as React from "react"
import { Layout } from "../components/Layout"
import { NavBar } from "../components/NavBar"
import { Landing } from "../components/Landing"
import { About } from "../components/About"

export default () => (
  <Layout>
    <Landing />
    <About id="about" />
  </Layout>
)

