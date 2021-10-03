import {React, useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';


const Product = (props) => {

  const [isAdding, setIsAdding] = useState(false);
  const {cart, setCart} = useContext(CartContext);
  const {product}=props;


  const addToCart = (event, product) => {

    event.preventDefault();
    let _cart = {...cart};
    if(!_cart.items){
      _cart.items = {}
    }
    if(_cart.items[product._id]){
      _cart.items[product._id] += 1;
    }else{
      _cart.items[product._id] = 1;
    }
    if(!_cart.totalItems){
      _cart.totalItems = 0;
    }

    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);

    
    // const cart ={
    //   items:{

    //   }
    // }
  }





    return (
        <>
        <div className="col">
        
    <div className="card h-100">
    
    <Link to={`/products/${product._id}`}>
      <img src={product.image} className="card-img-top" alt="cartimg"/>
      </Link>
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <button className="card-text rounded-pill border-0">{product.size}</button>
      </div>
      <div className="pb-2 px-2 d-flex justify-content-between">
      <button className="rounded-pill border-0">&#x20B9;<span>{product.price}</span></button>
      <button disabled={isAdding} onClick={(e) => {addToCart(e, product)}} className={`${isAdding ? "btn-dark": 
      "btn-warning" } rounded-pill border-0 btn-warning`} >ADD{isAdding ? "ED": ""}</button>
      </div>
    </div>
    
  </div>

        
   
        </>
    )
}

export default Product
