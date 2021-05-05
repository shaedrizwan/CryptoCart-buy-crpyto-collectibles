import "../stylesheets/cart.css"
import {useCart} from "../CartContext";



export function Cart(){
    const {cartState,cartDispatch} = useCart();
    return(
        <>
        <div>This is the cart page</div>
        {cartState.length === 0?<div>Cart is Empty</div> : cartState.map(product =>{
            return (
                <div className="cart-product-container">
                <img src={product.image} alt={product.slug} className="cart-product-image"/>
                <div className="cart-product-details-wrap">
                    <div>{product.name}</div>
                    <div>{product.owner}</div>
                    <div>{product.price}</div>
                    <button onClick={()=>cartDispatch({type:"RFC",payload:product})}>Remove from Cart</button>
                </div>
            </div>
        )})}
        </>
    )
}