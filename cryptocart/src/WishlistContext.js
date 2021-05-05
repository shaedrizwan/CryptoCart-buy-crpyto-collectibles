import {createContext, useContext,useReducer} from "react";

export const WishlistContext = createContext();

export function useWishlist() {
    return useContext(WishlistContext);
}

const wishlistItems = [];

const wishlistHandler = (state,{type,payload}) =>{
    switch(type){
        case "ATW": return [...state,payload];
        case "RFW": return(
            state.filter(product => product.id !== payload.id)
        )
        default: console.log("Error in displatch")
    }

    return state;
}

export function WishlistProvider({children}){
    const [wishlistState,wishlistDispatch] = useReducer(wishlistHandler,wishlistItems);
    return <WishlistContext.Provider value={{wishlistState,wishlistDispatch}}>
        {children}
    </WishlistContext.Provider>
}