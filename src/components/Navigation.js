import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext';

const Navigation = () => {

  const { cart } = useContext(CartContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="/images/logo.png" alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll fw-bold" style={{"--bs-scroll-height": "100px"}}>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item bg-warning rounded-pill px-2">
          <Link className="nav-link" to="/cart"><span className="text-dark">{ cart.totalItems ? cart.totalItems:0 }</span><img src="/images/cart.png" alt="cart" /></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navigation
