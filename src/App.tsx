import React, { useState } from 'react'
import logo from './logo.svg'
import './App.less'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>一封来自科学家的邀请函</h1>
    </div>
  )
}

export default App
