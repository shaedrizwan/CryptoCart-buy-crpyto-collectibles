import {useParams} from "react-router-dom";
import "../stylesheets/productPage.css";
import {useCart} from "../CartContext";
import {useWishlist} from "../WishlistContext";
import { useProduct } from "../ProductContext";

export function ProductDetails(){
    const {cartDispatch} = useCart();
    const {wishlistDispatch} = useWishlist();
    const {slug} = useParams();
    const {products} = useProduct();
    let product = []

    if(products){
        product = products.find(item => item.slug === slug)
    }
    
    return(
        <>
        {!products && <div>Please wait.. Product is loading!</div>}
        {products && <div className="product-container">
            <img src={product.image} alt={product.slug} className="product-image"/>
            <div className="product-details-wrap">
                <div>{product.name}</div>
                <div>{product.owner}</div>
                <div>{product.price}</div>
                <button onClick={()=>cartDispatch({type:"ATC",payload:product})}>Add to Cart</button>
                <button onClick={()=>wishlistDispatch({type:"ATW",payload:product})}>Add to Wishlist</button>
            </div>
        </div>}
        </>
    )
}