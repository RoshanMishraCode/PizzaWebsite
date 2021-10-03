import React from 'react'
import Products from '../components/Products'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row py-2">
                    <div className="col-md-6 pt-5 mt-md-5"><h6 className="py-3"><em>Are you hungry?</em></h6>
                    <h1 className="fw-bold my-2">Don't wait !</h1>
                    <button className="btn btn-warning border-0 btn-outline-success text-light my-5">Order Now</button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid p-2" src="/images/pizza.png" alt="heropizza" />
                    </div>
                </div>
            </div>
            <div className="py-3">
                <Products/>
            </div>
        </>
    )
}

export default Home
