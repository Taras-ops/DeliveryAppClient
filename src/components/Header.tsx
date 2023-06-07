import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-green text-white py-5'>
        <div className='container max-w-5xl mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <p>Delivery App</p>
                </div>
                <nav>
                    <ul className='flex justify-end items-center gap-3'>
                        <li>
                            <Link to="/">Shop</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header