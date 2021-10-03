import { useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router';

const SingleProduct = () => {

    const[product, setProduct] = useState({});
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`/api/products/${params._id}`)
        .then(res => res.json())
        .then(product => {
            setProduct(product);
        })
    },[params._id]);

    return (
        <>
           <div className="container my-5">
               <button className="btn btn-light fw-bold" onClick={() => {history.goBack()}}>Back</button>
               <div className="row d-flex">
                <div className="col-md-4 my-5 d-flex justify-content-center">
                    <img src={product.image} alt="SingleProductimages" className="img-fluid" />
                </div>
                <div className="col-md-4 my-md-5 my-4 ms-5 ms-md-0">
                    <h5>{product.name}</h5>
                    <p className="rounded-pill">{product.size}</p>
                    <p>
                    <button className="btn ps-0 fw-bold">₹ {product.price}</button>
                    </p>
                   <p> 
                   <button className="btn rounded-pill btn-warning px-4 fw-bold btn-outline-success border-0">Add to Cart</button>
                   </p>
                </div>
               </div>
           </div> 
        </>
    )
}

export default SingleProduct
