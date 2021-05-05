import "../stylesheets/cart.css"
import {useCart} from "../CartContext";



export function Cart(){
    const {cartState,cartDispatch} = useCart();

    let {price} = cartState.reduce(function(previousValue, currentValue) {
        return {
          price: previousValue.price + currentValue.price
        }
      },{price:0});
    
    return(
        <div className="cart-main">
            <div className="cart-pr-wrapper">
                {cartState.length === 0?<div>Cart is Empty</div> : cartState.map(product =>{
                    return (
                        <div key={product.id} className="cart-product-container">
                        <img src={product.image} alt={product.slug} className="cart-product-image"/>
                        <div className="cart-product-details-wrap">
                            <div>{product.name}</div>
                            <div>{product.owner}</div>
                            <div>{product.price}</div>
                            <button onClick={()=>cartDispatch({type:"RFC",payload:product})}>Remove from Cart</button>
                        </div>
                    </div>
                )})}
            </div>
            <div className="cart-checkout">
                <h2>Total Price to pay</h2>
                <div>Price: Ξ {price}</div>
                <div>Gas Fee: Ξ {price*0.1} (10% of the </div>
                <div>Total Price: Ξ {price + price*0.1}</div>
                <div>You will save Ξ {price*0.05} in gas fees on this order</div>
            </div>
        </div>
    )
}