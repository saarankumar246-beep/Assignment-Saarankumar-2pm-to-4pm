import { useState } from 'react'

import './App.css'
import MyComponent from './components/MyComponent'
import Timer from './components/Timer'
import WindowSize from './components/WindowSize'

function App() {
  

  return (
    <>
      <MyComponent /> <br />

      <Timer />

      <WindowSize />
    </>
  )
}

export default App
