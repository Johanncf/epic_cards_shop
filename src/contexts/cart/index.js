/* 
  COMO CRIAR UM CONTEXTO 
  1 - Importar createContext do react
  2 - atribui createContext para uma variável
    Ex: export const CartContext = createContext([]);
  3 - Criar o Provider
  4 - Importar o Provider no App.js
  5 - Consumir o contexto usando o useContex 
  ...
*/

import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const CartContext = createContext([])

export function CartProvider({children}) {

    const [cart, setCart] = useState([])

    function handleAddToCart(card) {
        setCart([...cart, card])
    }

    return (
        <CartContext.Provider value={{
            cart: cart,
            addItem: handleAddToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}