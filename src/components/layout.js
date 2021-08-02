import * as React from "react"
import { NavBar } from "./NavBar"

export const Layout = ({ children }) => (
  <>
    <NavBar />
    <div class="px-12">
      {children}
    </div>
  </>
)
