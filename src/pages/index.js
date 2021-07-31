import * as React from "react"
import { Layout } from "../components/Layout"
import { Landing } from "../components/Landing"
import { About } from "../components/About"
import { Experience } from "../components/Experience"

export default () => (
  <Layout>
    <Landing />
    <About id="about" />
    <Experience />
  </Layout>
)

