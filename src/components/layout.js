import * as React from "react"
import { NavBar } from "./NavBar"

export const Layout = ({ children }) => (
  <>
    <NavBar />
    <div class="max-w-7xl mx-auto">
      {children}
    </div>
  </>
)
