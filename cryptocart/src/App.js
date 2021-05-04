import './App.css';
import {Routes,Route,NavLink} from "react-router-dom";
import {Cart} from "./pages/cart";
import {Home} from "./pages/home";
import {Wishlist} from "./pages/wishlist";
import {ProductDetails} from "./pages/productPage";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink className="nav-items" to="wishlist">Wishlist</NavLink>
        <NavLink className="nav-items" to="cart">Cart</NavLink>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="wishlist" element={<Wishlist/>}/>
          <Route path="product/:slug" element={<ProductDetails/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
