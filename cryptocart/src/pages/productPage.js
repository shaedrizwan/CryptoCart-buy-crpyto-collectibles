import {useParams} from "react-router-dom";
import {ProductsDB} from "../productsDB";
import "../stylesheets/productPage.css";

export function ProductDetails(){
    const {slug} = useParams();
    const product = ProductsDB.data.find(item => item.slug === slug)
    console.log(product.name)
    return(
        <div className="product-container">
            <img src={product.image} alt={product.slug} className="product-image"/>
            <div className="product-details-wrap">
                <div>{product.name}</div>
                <div>{product.owner}</div>
                <div>{product.price}</div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}