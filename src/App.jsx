
import './App.css'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <div className='px-3 md:px-10'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home /> } />
          <Route exact path='/products' element={ <h1>Products Page</h1>} />
          <Route exact path='/about' element={ <h1>About Page</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
