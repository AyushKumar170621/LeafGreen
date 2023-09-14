import React from 'react'
import { Link } from 'react-router-dom'
import "./foot.css"
const Adnav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  adminnav">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-5">
        <Link className="nav-link" to="/"><i aria-current="page" className='fa fa-home'>&nbsp;</i>Home</Link>
        <Link className="nav-link" to="/admin"><i className='fa fa-clipboard'>&nbsp;</i>Dashboard</Link>
        <Link className="nav-link" to="/admin/addproduct"><i className='fa fa-box'>&nbsp;</i>Add Product</Link>
        <Link className="nav-link" to="/admin/orders"><i className='fa fa-shopping-basket'>&nbsp;</i>All Orders</Link>
        <Link className="nav-link" to="/admin/products"><i className='fa fa-box-open'>&nbsp;</i>All Products</Link>
        <Link className="nav-link" to="/admin/users"><i className='fa fa-user'>&nbsp;</i>All User</Link>
      </div>
    </div>
    <div className="ms-auto">
          <a href="https://res.cloudinary.com/dsjseacz5/image/upload/v1692620588/nfwdmflfe3zp3wn8qssb.png" className="navbar-brand ms-auto">
              <img
                className="img-fluid"
                src="https://res.cloudinary.com/dsjseacz5/image/upload/v1692620588/nfwdmflfe3zp3wn8qssb.png"
                alt="Logo"
                style={{ maxWidth: "100px" ,marginLeft:"60px"}} // Adjust the max width as needed
              />
          </a>
    </div>
  </div>
</nav>
  )
}

export default Adnav