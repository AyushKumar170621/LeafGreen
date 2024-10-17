import React,{useEffect} from 'react';
import './ship.css';
import Navbar from '../Navbar/Navbar';
import { useSelector } from "react-redux";
import Footer from '../Footer/Footer';
import axios from "axios";
const Shipp = () => {
  const payment = JSON.parse(localStorage.getItem("payment"));
  const { shippingInfo } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);
  const {isAuthenticated, user ,error } = useSelector((state) => state.user);
  useEffect(() => {
    if(error)
    {
      window.alert(error);
    }
    
  }, [user,isAuthenticated,error,shippingInfo,cartItems]);


  const checkoutHandler = async () => {
    
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/v1/razorapikey");
    console.log(key)
    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/v1/checkout", {
      amount: payment.totalPrice, // Use the stored total amount here
    });
    const options = {
      key:key,
      amount: order.amount,
      currency: "INR",
      name: "Live Green",
      description: "Checking out",
      image: "https://res.cloudinary.com/dsjseacz5/image/upload/v1692620588/nfwdmflfe3zp3wn8qssb.png",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/v1/payment/process",
      prefill: {
        name: "Ayush Kumar",
        email: "ayush.kumar@example.com",
        contact: "5055052",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (<div>
    <Navbar/>
    <div className="container-xxl py-5 ">
    <div className="container d-grid justify-content-center">
        <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth :"500px"}}>
            <h1 className="display-6">Shipping Details</h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-12 mx-auto wow fadeInUp" data-wow-delay="0.1s">
            <div className="shipping-details text-center">
                    <h2 className="mb-4">Shipping Address</h2>
                    <p><strong>Name:</strong>{user.name}</p>
                    <p><strong>Address:</strong> {shippingInfo.address}</p>
                    <p><strong>State:</strong> {shippingInfo.state}</p>
                    <p><strong>Postal Code:</strong> {shippingInfo.pincode}</p>
                    <p><strong>Country:</strong> {shippingInfo.country.label}</p>
                    <p><strong>Status:</strong> <i className="fas fa-check-circle text-success"></i>Not Placed Yet</p>
                </div>
            </div>
            <div className="container d-grid justify-content-center text-center">
        <h2>Order Summary</h2>
        <p>Subtotal: {payment.itemsPrice}</p>
        <p>GST (18%): Rs{payment.taxPrice}</p>
        <p>Delivery Charges: Rs{payment.shippingPrice}</p>
        <p>Total Amount: Rs{payment.totalPrice}</p>{" "}
        {/* Use the stored total amount here */}
      </div>

      <div className="container d-flex justify-content-center">
        <div className="mb-3">
          <button className="btn btn-secondary btn-lg" onClick={checkoutHandler}>
            Pay
          </button>
        </div>
      </div>
          
        </div>
    </div>
</div>
<Footer/>
</div>
  );
};

export default Shipp;
