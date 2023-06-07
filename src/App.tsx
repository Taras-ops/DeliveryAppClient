import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Shops from './pages/Shops';
import ShoppingCart from './pages/Cart';
import Header from './components/Header';
import instance from './axios';

function App() {
  const [shops, setShops] = useState([])
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    const fetchShops = async () => {
      const result = await instance.get('shops')

      const cartProductsLocalStorage: string = localStorage.getItem('cartProducts')!
      setCartProducts(JSON.parse(cartProductsLocalStorage))

      if(result.data) {
        setShops(result.data)
      } else {
        alert("Error!")
      }
    }

    const fetchProducts = async () => {
      const result = await instance.get('goods')

      if(result.data) {
        setProducts(result.data)
      } else {
        alert("Error!")
      }
    }


    fetchShops()
    fetchProducts()
  }, [])


  return (
    <>
    <Header />
     <Routes>
      <Route index path='/' element={<Shops shops={shops} products={products} cartProducts={cartProducts} setCartProducts={setCartProducts}/>}/>
      <Route path='/cart' element={<ShoppingCart cartProducts={cartProducts} setCartProducts={setCartProducts}/>}/>
     </Routes>
    </>
  );
}

export default App;
