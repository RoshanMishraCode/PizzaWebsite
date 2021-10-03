import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import Home from "./pages/Home";
import products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';
import "./app.css"
import { getCart, storeCart } from './helpers';

const App = () => {

    const [cart, setCart] = useState({});

    // Fetch from local storage
    useEffect(() => {
      getCart().then(cart => {
        setCart(JSON.parse(cart));

      });
    },[]);

    useEffect(() => {
        storeCart(JSON.stringify(cart));
        // window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    return (
        <>
        <Router>
        <CartContext.Provider value={{cart, setCart}}>
                <Navigation/>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                {/* <Route path="/about" component={About}></Route> */}
                <Route path="/products" exact component={products}></Route>
                <Route path="/products/:_id" component={SingleProduct}/>
                <Route path="/cart" component={Cart}></Route>
            </Switch>
            </CartContext.Provider>
        </Router>

        </>
    )
}

export default App
