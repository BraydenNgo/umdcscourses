import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid'
import csLogo from './images/cs_logo.png'

function App() {
  return (
    <>
      <div className = "header">
        <h1>UMD CS Upper Level Undergrad Courses</h1>
        <img src = {csLogo} className="csLogo"></img>
      </div>
      <Grid/>
    </>
  )
}

export default App
