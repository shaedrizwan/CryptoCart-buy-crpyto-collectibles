import "../stylesheets/products.css"
import {Link} from "react-router-dom"
import {useReducer} from "react"
import { useProduct } from "../ProductContext"

export function Products(){

    const {products} = useProduct();

    function getSortedData(state, action) {
    if (action.type === "PRICE_HIGH_TO_LOW") {
        return { ...state, data: state.data.sort((a, b) => b.price - a.price) };
    }

    if (action.type === "PRICE_LOW_TO_HIGH") {
        return { ...state, data: state.data.sort((a, b) => a.price - b.price) };
    }
    return state;
  }

  const [state,dispatch] = useReducer(getSortedData,products);



    return (
        <div className="products-main">
            <div className="filter-container">
                <h3 style={{padding:"1rem"}}>Sort by Price</h3>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        onClick={() =>
                        dispatch({ type: "PRICE_HIGH_TO_LOW" })
                        }
                        >
                    </input>{" "}
                    Price - High to Low
                </label>

                <label>
                    <input
                        type="radio"
                        name="sort"
                        onClick={() =>
                        dispatch({ type:"PRICE_LOW_TO_HIGH" })
                        }
                        >
                    </input>{" "}
                    Price - Low to High
                </label>

            </div>
            <div className="prod-grid">
                {!products && <div>Products are loading.. Please wait!!</div>}
                {products && products.map(product =>{
                    return <Link className="linkTo" key={product._id} to={`/product/${product.slug}`}><div className="prod-wrap">
                        <img src={product.image} alt={product.slug} className="prod-thumb"/>
                        <h2>{product.name}</h2>
                        <div className="product-price">Ξ {product.price}</div>
                        <div className="product-owner">Owned by: {product.owner}</div>
                    </div>
                    </Link>
                })}
            </div>
        </div>
    )
}