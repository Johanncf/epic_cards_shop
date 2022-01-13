
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Cards from './Pages/Cards/Cards';
import Menu from './Components/Menu/Menu';
import {CartProvider} from './contexts/cart';
import Cart from './Pages/Cart/Cart';


function App() {

  return (
    <>
      <CartProvider>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cards/:category' element={<Cards />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
