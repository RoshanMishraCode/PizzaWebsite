import React from 'react'
import Product from './Product';
import { useState, useEffect } from 'react';

const Products = () => {

    // const {name} = useContext(CartContext);

    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch("/api/products")
        .then(response => response.json())
        .then(products => {
            setproducts(products);
        })
    }, []);

    return (
        <>
        <div className="container my-2">
        <h2 className="my-4">Products</h2>

         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">

        {
            products.map(product => <Product key={product._id} product={product}/>)
        }
        </div>
        </div>
        
        
        </>
    )
}

export default Products
