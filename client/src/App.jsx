
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Colleges from './Pages/Colleges'

function App() {

  return (
    <div className="inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/colleges' element={<Colleges />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
