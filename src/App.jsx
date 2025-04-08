
import './App.css'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer'
import Products from './pages/Products'
import About from './pages/About'

function App() {

  return (
    <Router>
      <CartProvider>
        <div className='px-3 md:px-10'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home /> } />
            <Route exact path='/products' element={ <Products />} />
            <Route exact path='/about' element={ <About /> } />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
  
}

export default App
