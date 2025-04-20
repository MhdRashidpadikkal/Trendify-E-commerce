
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
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import CustomToast from './components/common/CustomToast'
import { ToastContextProvider } from './context/ToastContext'
import ScrollToTop from './components/common/ScrollToTop'
import SearchedProducts from './pages/SearchedProducts'

function App() {

  return (
    <Router>
      <ToastContextProvider>
        <FilterProvider>
          <CartProvider>
            <div className='px-3 md:px-10'>
              <Navbar />
              <ScrollToTop />
              <CustomToast />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='product-detail/:id/:title' element={<ProductDetails />} />
                <Route exact path='/search/:keyword' element={<SearchedProducts />} />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/contact' element={<Contact />} />
              </Routes>
              <Footer />
            </div>
          </CartProvider>
        </FilterProvider>
      </ToastContextProvider>
    </Router>
  )

}

export default App
