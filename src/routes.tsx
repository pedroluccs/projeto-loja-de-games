import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Categories from './Pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/categories" element={<Categories />}></Route>
  </Routes>
)

export default Rotas
