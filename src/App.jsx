import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LandingPage } from './Components/landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='bg-gradient-to-b from-gold to-gold2'>
    <LandingPage />
    </div>
  )
}

export default App
