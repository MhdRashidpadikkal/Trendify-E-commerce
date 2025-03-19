
import './App.css'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='px-3 md:px-10'>
        <Navbar />
      </div>
    </Router>
  )
}

export default App
