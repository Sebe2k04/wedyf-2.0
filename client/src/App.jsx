
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  return (
    <div className="inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
