import {useContext, useEffect, useState} from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {

    let total = 0;

    const [products, setProducts] = useState([]);

    const { cart, setCart } = useContext(CartContext);

    const [priceFetched, togglePriceFetched] = useState(false);
    // console.log(cart);
    useEffect(() => {
        if(!cart.items){
            return;
        }
        if(priceFetched){
            return;
        }
        // console.log("cart",object.keys(cart.items));
        // https://ecom-rest-apis.herokuapp.com
        fetch("/api/Products/cart-items", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify({ids: Object.keys(cart.items)})
        }).then(res => res.json())
        .then(products => {
            setProducts(products);
            togglePriceFetched(true);
        })
    }, [cart,priceFetched]);

    const getQty =(productId) => {
        return cart.items[productId];
    }

    const increment = (productId) => {
        const existingQty = cart.items[productId];
        const _cart = {...cart};
        _cart.items[productId] = existingQty + 1 ;
        _cart.totalItems += 1;
        setCart(_cart);
    }
    const decrement = (productId) => {
        const existingQty = cart.items[productId];
        if(existingQty === 1) {
            return
        }
        const _cart = {...cart};
        _cart.items[productId] = existingQty - 1 ;
        _cart.totalItems -= 1;
        setCart(_cart);
    }
    const getSum = (productId, price) => {
        const sum = price * getQty(productId);
        total += sum;
        return sum;
    }
    const handleDelete = (productId) => {
        const _cart = {...cart};
        const qty = _cart.items[productId];
        delete _cart.items[productId]
        _cart.totalItems -= qty;
        setCart(_cart);
        const updatedProductsList = products.filter((product) => product._id !== productId);
        setProducts(updatedProductsList)
    }
    const handleOrderNow = () => {
        window.alert("Order placed succesfully!");
        setProducts([]);
        setCart({});
    }



    return (
        !products.length 
        ? <img src="/images/empty-cart.png" className="img-fluid d-flex align-items-center mt-5" alt="emptycart" />
        :
        <>
        
            <div className="container">
            <h4 className="mt-5 px-5">Cart items</h4>

            {
                products.map(product => {
                    return(
                        <div className="row px-md-5 my-4" key={product._id}>
                    <div className="col-10 col-md-5 d-flex align-items-center">
                        <img src={product.image} className="w-25" alt="cartimage" />
                        <p className="fw-bold ms-4">{product.name}</p>
                    </div>
                    <div className="col-2 col-md-3 pe-4 d-flex flex-column flex-md-row align-items-center">
                        <button onClick={() => {decrement(product._id)}} className="px-3 fw-bold py-0 btn btn-warning rounded-pill"> <h5>-</h5> </button>
                        <span className="mx-2 fw-bold">{ getQty( product._id ) }</span>
                        <button onClick={() => {increment(product._id)}} className="px-3 fw-bold py-0 btn btn-warning rounded-pill"> <h5>+</h5> </button>
                    </div>
                    <div className="col-6 col-md-2 d-md-flex align-items-center fw-bold mt-3 mt-md-0">
                    ₹ {getSum(product._id, product.price)}
                    </div>
                    <div className="col-6 col-md-2 d-md-flex align-items-center text-end mt-3 mt-md-0">
                        <button onClick={() => {handleDelete(product._id)}} className="btn btn-danger rounded-pill">Delete</button>
                    </div>
                </div>

                    )
                })
            }

   
                
                <hr className=""/>
                
                <div className="fw-bold text-end me-5 my-4">
                <p>
                Grand Total: ₹ {total}
                </p>
                <button onClick = {handleOrderNow} className="btn btn-success">Order Now</button>

                </div>

            </div>

        </>
            
    )
}

export default Cart
