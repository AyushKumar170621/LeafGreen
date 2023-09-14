import React, { useState, useEffect, useMemo } from "react";
import "./ship.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import countryList from "react-select-country-list";
import { saveShippingInfo } from "../../action/cartAction";
import { useSelector,useDispatch } from "react-redux";

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);
  const countryOpitons = useMemo(() => countryList().getData(), []);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showFilled, setFilled] = useState(shippingInfo?true:false);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pincode, setPincode] = useState(shippingInfo.pincode);
  const [address, setAddress] = useState(shippingInfo.address);
  const [state, setState] = useState(shippingInfo.state);
  const [phoneNo, setPhone] = useState(shippingInfo.phoneNo);

  useEffect(() => {
    
  }, []);

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setShowAddressForm(!showAddressForm);
    setFilled(showAddressForm);
    if (phoneNo.length < 10 || phoneNo.length > 10) {
      window.alert("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, state, country, pincode, phoneNo })
    );
    alert("Address has been saved!");
  };
  const handleCheck = () => {
    navigate('/checkout')
  }
  const toggleAddressForm = () => {
    setShowAddressForm(!showAddressForm);
  };

  return (
    <div>
      <Navbar />
      <div className="container-xxl py-5 ">
        <div className="container d-grid justify-content-center">
          <div
            className="section-title text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-6">Shipping Details</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-12 mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="shipping-details">
                <h2 className="mb-4">Shipping Address</h2>
                <div className="container">
                  {showFilled &&
                    <div className="container p-5">
                      <h2>Deliver Here:</h2>
                      <p>{address}</p>
                      <p>{pincode}</p>
                      <p>{state}</p>
                      <p>{country}</p>
                      <p>{phoneNo}</p>
                      <button onClick={handleCheck} className="btn btn-primary">Go to Checkout</button>
                    </div>
                  }
                </div>
                <button className="btn btn-primary" onClick={toggleAddressForm}>
                  {showAddressForm ? "-" : "+"} Address
                </button>
                {showAddressForm ? (
                  <div>
                    <h3>Enter Address Details</h3>
                    <form onSubmit={handleAddressSubmit}>
                      <div className="mb-3">
                        <label htmlFor="landmark" className="form-label">
                          Country
                        </label>
                        <Select
                          options={countryOpitons}
                          value={country}
                          onChange={(e) => {
                            setCountry(e.label);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="pincode" className="form-label">
                          Pincode
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pincode"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          value={phoneNo}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <textarea
                          className="form-control"
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          rows="4"
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit Address
                      </button>
                    </form>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shipping;
