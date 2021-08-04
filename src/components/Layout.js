import * as React from "react"
import { Footer } from "./Footer"
import { NavBar } from "./NavBar"

export const Layout = ({ children }) => (
  <div class="dark:bg-black dark:text-white">
    <NavBar />
    <div class="px-12 lg:px-16">
      {children}
    </div>
    <Footer />
  </div>
)
