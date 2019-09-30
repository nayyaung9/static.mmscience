import React from "react"
import Navbar from './navbar'

export default ({ children }) => (
  <div>
    <Navbar/>
    <div className="container">
      <main style={{ margin: '80px auto' }}>
        {children}
      </main>
    </div>
  </div>
)