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
import { FeaturePage } from './pages/FeaturePage'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main>
         <Routes>
          <Route index path='/' element={<HomePage/>}/>
            <Route  path='/services' element={<FeaturePage />} />
         </Routes>
        </main>

        <Footer2 />
      </div>
    </>
  )
}

export default App
