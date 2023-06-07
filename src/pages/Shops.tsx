import React, {useState} from 'react'

import ProductInterface from '../types/Product'


interface ShopsProps {
  shops: {
    name: string,
    _id: string
  }[],
  products: ProductInterface[],
  cartProducts: ProductInterface[]
  setCartProducts: any
}


const Shops = ({shops, products, setCartProducts, cartProducts}: ShopsProps) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>([])
  const [filtered, setFiltered] = useState<boolean>(false)
  const onClickAddProductCartHandle = (item: ProductInterface) => {
    if(!cartProducts.includes(item)) {
      item.quantity = 1
      setCartProducts((state: ProductInterface[]) => [...state, item])
      localStorage.setItem('cartProducts', JSON.stringify(products))
    }
  } 

  const onClickFilterProducts = (id: string) => {
    const fProducts = products.filter((item) => item.shop._id === id)
    setFilteredProducts(fProducts)
    setFiltered(true)
  }

  console.log(filteredProducts)

  return (
    <section className='py-10'>
      <div className='container max-w-5xl mx-auto grid grid-cols-12 gap-10 auto-rows-min'>
        <div className='col-span-4  bg-green text-white py-5 px-10 text-center'>
          <h3 className='font-bold text-xl mb-9'>Shops</h3>
          <div>
            {
              shops.map((item, index) => <div onClick={() => onClickFilterProducts(item._id)} className='w-full border mb-5 py-3 hover:bg-white hover:text-green' key={index}>
                <p>{item.name}</p>
              </div>)
            }
          </div>
        </div>
        <div className='col-start-5 col-end-13 grid grid-cols-3 gap-4 auto-rows-min'>
          {
            filtered ? filteredProducts.map((item, index) => <div key={index} className='bg-green text-white py-5 px-3 text-center'>
              <img src={`http://127.0.0.1:5000/images/${item.imageName}`} alt={item.name} className='h-32 mb-4'/>
              <h3 className='font-bold text-xl mb-7'>{item.name}</h3>
              <button className='border py-2 px-4 hover:bg-white hover:text-green' onClick={() => onClickAddProductCartHandle(item)}>Add to Cart</button>
            </div>) :products.map((item, index) => <div key={index} className='bg-green text-white py-5 px-3 text-center'>
              <img src={`http://127.0.0.1:5000/images/${item.imageName}`} alt={item.name} className='h-32 mb-4'/>
              <h3 className='font-bold text-xl mb-7'>{item.name}</h3>
              <button className='border py-2 px-4 hover:bg-white hover:text-green' onClick={() => onClickAddProductCartHandle(item)}>Add to Cart</button>
            </div>)
          }
        </div>
      </div>
    </section>
  )
}

export default Shops