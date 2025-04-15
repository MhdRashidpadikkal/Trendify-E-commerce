
import './App.css'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer'
import Products from './pages/Products'
import About from './pages/About'
import { FilterProvider } from './context/FilterContext'

function App() {

  return (
    <Router>
      <FilterProvider>
        <CartProvider>
          <div className='px-3 md:px-10'>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/products' element={<Products />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </FilterProvider>
    </Router>
  )

}

export default App
