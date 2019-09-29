import React from "react"
import Navbar from './navbar'

export default ({ children }) => (
  <div>
    <Navbar/>
    <div className="container">
      {children}
    </div>
  </div>
)