import {createContext, useContext,useReducer} from "react";

export const CartContext = createContext();

export function useCart(){
    return useContext(CartContext);
}

const cartItems = [];

const cartHandler = (state,{type,payload}) => {
    switch(type){
        case "ATC": return [...state,payload];
        case "RFC": return(
            state.filter(product => product.id !== payload.id)
        )
        default: console.log("Error in displatch")
    }

    return state;
}

export function CartProvider({children}){
    const [cartState,cartDispatch] = useReducer(cartHandler,cartItems);
    return(
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}
