import React from "react"
import Navbar from './navbar'

export default ({ children }) => (
  <div>
    <Navbar/>
    <div className="container">
      <main style={{ marginTop: '80px' }}>
        {children}
      </main>
    </div>
  </div>
)