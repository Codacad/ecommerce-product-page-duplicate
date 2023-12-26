import React, { useState } from 'react'
import CartContext from './CartContext'
const CartContextProvider = ({children}) => {
  let [cart, setCart] = useState([])
  return (  
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
