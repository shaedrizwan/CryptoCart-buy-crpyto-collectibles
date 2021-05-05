import {useParams} from "react-router-dom";
import {ProductsDB} from "../productsDB";
import "../stylesheets/productPage.css";
import {useCart} from "../CartContext";
import {useWishlist} from "../WishlistContext";

export function ProductDetails(){
    const {cartDispatch} = useCart();
    const {wishlistDispatch} = useWishlist();
    const {slug} = useParams();
    const product = ProductsDB.data.find(item => item.slug === slug)
    return(
        <div className="product-container">
            <img src={product.image} alt={product.slug} className="product-image"/>
            <div className="product-details-wrap">
                <div>{product.name}</div>
                <div>{product.owner}</div>
                <div>{product.price}</div>
                <button onClick={()=>cartDispatch({type:"ATC",payload:product})}>Add to Cart</button>
                <button onClick={()=>wishlistDispatch({type:"ATW",payload:product})}>Add to Wishlist</button>
            </div>
        </div>
    )
}