import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import ProductDetail from './Pages/ProductDetail'
import Category from './Pages/Category'
import Login from './Pages/Login'
import Register from './Pages/Register'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:slug" element={<ProductDetail />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
