import React, { useState, useEffect } from 'react';
import { useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CartCard from './CartCard';
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [subprice,setSubPrice] = useState(0);
  const [shipping,setShipPrice] = useState(50);
  const handleSubmit =()=>{
      const payment={
        itemsPrice:subprice,
        taxPrice:subprice*0.18,
        shippingPrice:shipping,
        totalPrice:subprice+subprice*0.18+shipping,
      }
      localStorage.setItem("payment",JSON.stringify(payment));
      navigate("/shipping")
  }
  useEffect(() => {
    setSubPrice(cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    ))
    if(subprice > 200)
    {
      setShipPrice(0);
    }
  },[cartItems,subprice])
  return (
    <div>
      <Navbar />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ "max-width": "500px" }}>
            <p className="fs-5 fw-medium fst-italic text-primary">Your Shopping Cart</p>
            <h1 className="display-6">Review and Complete Your Order</h1>
          </div>
          <div className="row g-4">
            {cartItems && cartItems.map((item) => (<CartCard item={item}/>))}
            <div className="col-md-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">Order Summary</h5>
                  <hr />
                  <p className="mb-2">Subtotal: Rs <span id="subtotal">{subprice}</span></p>
                  <p className="mb-2">Shipping: {shipping}</p>
                  <h4 className="text-primary mb-3">Total: Rs <span id="total">{shipping+subprice}</span></h4>
                  <button onClick={handleSubmit} className="btn btn-primary btn-block">Proceed to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
