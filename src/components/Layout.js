import * as React from "react"
import { Footer } from "./Footer"
import { NavBar } from "./NavBar"

export const Layout = ({ children }) => (
  <>
    <NavBar />
    <div class="px-12 lg:px-16">
      {children}
    </div>
    <Footer />
  </>
)
