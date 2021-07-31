import * as React from "react"

export const Title = ({ style, children }) => (
  <h2 class={`text-5xl sm:text-7xl font-bold my-8 ${style ?? ""}`}>
    {children}
  </h2>
)
