import './App.css'
import { Navbar } from './components/Navbar'
import {Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { Ingredients } from './pages/Ingredients'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </>
  )
}

export default App
