import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GridDistortion from '../@/components/GridDistortion';
import btndemo from "./assets/btndemo.webp"
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import Navbar from './components/Navbar'

import Footers02 from './components/creative-tim/blocks/footers-02'
import { Footer2 } from './components/footer2'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <main>
         <Routes>
          <Route index path='/' element={<HomePage/>}/>
         </Routes>
        </main>

        <Footer2 />
      </div>
    </>
  )
}

export default App
