import "../stylesheets/home.css"
import {ProductsDB} from "../productsDB";
import { Link } from "react-router-dom";

export function Home(){
    return(
        <div className="home-container">
            <img class="hero-image" alt="hero" src="../assets/meebits.jpg"/>
            <div className="title-main">Categories</div>
            <div className="categories-container">
                <div className="category">
                    <img src="../assets/category-art.png" className="img-category" alt="art"/>
                    <div className="category-title">Art</div>
                </div>
                <div className="category">
                <img src="../assets/category-card.png" className="img-category" alt="art"/>
                    <div className="category-title">Cards</div>
                </div>
                <div className="category">
                <img src="../assets/category-sports.png" className="img-category" alt="art"/>
                    <div className="category-title">Sports</div>
                </div>
            </div>
            <div className="title-main">Products</div>
            <div className="product-grid">
                {ProductsDB.data.filter((item,idx)=>idx<4).map(product =>{
                    return <Link className="linkTo" to={`/product/${product.slug}`}><div key={product.id} className="product-wrap">
                        <img src={product.image} alt={product.slug} className="product-thumb"/>
                        <h2>{product.name}</h2>
                        <div className="product-price">Ξ {product.price}</div>
                        <div className="product-owner">Owned by: {product.owner}</div>
                    </div>
                    </Link>
                })}
            </div>
            <Link to="products" ><button>View All Products</button></Link>
        </div>
    )
}