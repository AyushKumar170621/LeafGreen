import React from 'react';
import { Fragment, useEffect } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Spinner from "../Loading/Spinner"
import { Link } from 'react-router-dom';
import ProductCard from '../Product/ProductCard'
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../action/productAction";
import Crousel from '../Crousel/Crousel';
function Home() {
    const dispatch = useDispatch();
    const {loading, error, products} = useSelector((state) => state.products) 
    useEffect(() => {
        if(error) {
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    },[dispatch,error]);
  return (
    <Fragment>
        {loading?<Spinner/>:<Fragment>
      
      <Navbar/>
      <Crousel/>
      <div className="container-fluid product py-5 my-5">
          <div className="container py-5">
              <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{"maxwidth": "500px"}}>
                  <p className="fs-5 fw-medium fst-italic text-primary">Our Products</p>
                  <h1 className="display-6">Checkout our fresh & healthy Vegetables</h1>
              </div>
              <div className="owl-carousel product-carousel wow fadeInUp" data-wow-delay="0.5s">
                  <Link href="" className="d-block product-item rounded">
                      <img src="img/potato.jpg" alt=""/>
                      <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                          <h4 className="text-primary">Potato</h4>
                          <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                      </div>
                  </Link>
                  <Link href="" className="d-block product-item rounded">
                      <img src="img/ginger.jpg" alt=""/>
                      <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                          <h4 className="text-primary">Ginger</h4>
                          <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                      </div>
                  </Link>
                  <Link href="" className="d-block product-item rounded">
                      <img src="img/carrots.jpg" alt=""/>
                      <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                          <h4 className="text-primary">Carrot</h4>
                          <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                      </div>
                  </Link>
                  <Link href="" className="d-block product-item rounded">
                      <img src="img/onion.jpg" alt=""/>
                      <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                          <h4 className="text-primary">Onion</h4>
                          <span className="text-body">Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum</span>
                      </div>
                  </Link>
              </div>
          </div>
      </div>
      
  
  
          <div className="container-xxl store py-5">
          <div className="container">
              <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{"maxwidth": "500px"}}>
                  <p className="fs-5 fw-medium fst-italic text-primary">Online Store</p>
                  <h1 className="display-6">Want to stay healthy? Shop Now</h1>
              </div>
              <div className="row g-4">
                 
                  {products && products.map((product) => <ProductCard key={product._id} product={product}/>)}
                  
                  <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                      <Link className="btn btn-primary rounded-pill py-3 px-5" to="/products"><b className='text-dark'>View More Products</b></Link>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
      </Fragment>}
    </Fragment>
  );
}

export default Home;