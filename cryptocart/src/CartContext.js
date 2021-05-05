import {createContext, useContext,useReducer} from "react";

export const CartContext = createContext();

export function useCart(){
    return useContext(CartContext);
}

const cartItems = [];

const cartHandler = (state,{type,payload}) => {
    switch(type){
        case "ATC": {
            const prod = state.find(item=>item.id === payload.id)
            console.log(prod)
            if(prod === undefined)
            {
                state = [...state,payload]
                return state.map(product=>product.id===payload.id?{...product,quantity:1}:product)
            }
            else{
                return state.map(product=>product.id===payload.id?{...product,quantity:product.quantity+1}:product)
            }
        }
        case "RFC":{
            if(payload.quantity === 1){
                return state.filter(product => product.id !== payload.id)
            }
            else{
                return state.map(product=>product.id === payload.id?{...product,quantity:product.quantity-1}:product)
            }
        }
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
