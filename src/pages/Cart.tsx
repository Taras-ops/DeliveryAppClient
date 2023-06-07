import React, { useState, useEffect } from 'react'

import ProductInterface from '../types/Product'

interface CartProps {
  cartProducts: ProductInterface[]
  setCartProducts: any
}

const Cart = ({ cartProducts, setCartProducts }: CartProps) => {
  const [amount, setAmount] = useState(0)

  const onChangeQuantity = (e: any, item: ProductInterface) => {
    item.quantity = e.target.value
    amountCalculation()
  }

  const amountCalculation = () => {
    let sum: number = 0
    cartProducts.forEach((item) => {
      sum += item.price * item.quantity
    })

    setAmount(sum)
  }

  const onDeleteCartItem = (item: ProductInterface) => {
    setCartProducts((state: ProductInterface[]) => state.filter((product: ProductInterface) => product !== item))
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts.filter((product) => product !== item)))
  }

  useEffect(() => {
    amountCalculation()
  })

  return (
    <section className='py-10'>
      <div className='container max-w-5xl mx-auto '>
        <div className='grid grid-cols-12 gap-10 mb-7'>
          <form action='' className='col-span-6 bg-green text-white py-10 px-8'>
            <div className='mb-5'>
              <label htmlFor='name-input' className='mb-2 block'>
                Name:
              </label>
              <input
                id='name-input'
                type='text'
                placeholder='Your name...'
                className='bg-transparent block border w-full p-2 placeholder:italic placeholder:text-white placeholder:opacity-50'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='email-input' className='mb-2 block'>
                Email:
              </label>
              <input
                id='email-input'
                type='email'
                placeholder='Your email...'
                className='bg-transparent block border w-full p-2 placeholder:italic placeholder:text-white placeholder:opacity-50'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='phone-input' className='mb-2 block'>
                Phone:
              </label>
              <input
                id='phone-input'
                type='tel'
                placeholder='Your phone...'
                className='bg-transparent block border w-full p-2 placeholder:italic placeholder:text-white placeholder:opacity-50'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='address-input' className='mb-2 block'>
                Address:
              </label>
              <input
                id='address-input'
                type='text'
                placeholder='Your address...'
                className='bg-transparent block border w-full p-2 placeholder:italic placeholder:text-white placeholder:opacity-50'
              />
            </div>
          </form>
          <div className='border border-green col-start-7 col-end-13 py-5 px-4 text-white overflow-y-scroll'>
            {cartProducts.map((item) => (
              <div
                key={item._id}
                className='flex relative justify-between items-center bg-green p-3'
              >
                <div onClick={() => onDeleteCartItem(item)} className='absolute right-4 top-4 bg-red py-1 px-1 leading-none font-bold cursor-pointer'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-x'
                    viewBox='0 0 16 16'
                  >
                    {' '}
                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />{' '}
                  </svg>
                </div>
                <img
                  src={`http://127.0.0.1:5000/images/${item.imageName}`}
                  alt={item.name}
                  className='h-32'
                />
                <div>
                  <h5 className='font-bold text-lg'>{item.name}</h5>
                  <p className='mb-3'>Price: {item.price}</p>
                  <input
                    type='number'
                    value={item.quantity}
                    onChange={(e) => onChangeQuantity(e, item)}
                    min='1'
                    className='bg-transparent p-1 border border-white'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mx-auto'>
          <p className='text-green mb-2 block'>
            Total Price: <span>{amount}</span>
          </p>
          <button className='bg-green text-white py-2 px-5 font-bold text-xl'>
            Submit
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cart
