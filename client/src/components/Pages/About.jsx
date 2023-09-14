import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const About = () => {
  return (
    <div><Navbar/>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid bg-white w-100 mb-3 wow fadeIn"
                  data-wow-delay="0.1s"
                  src="img/marisol-benitez-QvkAQTNj4zk-unsplash.jpg"
                  alt="Fruits and Vegetables"
                />
                <img
                  className="img-fluid bg-white w-50 wow fadeIn"
                  data-wow-delay="0.2s"
                  src="img/nathan-dumlao-vX1Ri5bVPOQ-unsplash (1).jpg"
                  alt="Fresh Produce"
                />
              </div>
              <div className="col-6">
                <img
                  className="img-fluid bg-white w-50 mb-3 wow fadeIn"
                  data-wow-delay="0.3s"
                  src="img/irene-kredenets-zNsSGYXaeP8-unsplash.jpg"
                  alt="Healthy Choices"
                  width="1300"
                />
                <img
                  className="img-fluid bg-white w-100 wow fadeIn"
                  data-wow-delay="0.4s"
                  src="img/thomas-le-pRJhn4MbsMM-unsplash.jpg"
                  alt="Direct from Market"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-primary">About Us</p>
              <h1 className="display-6">Bringing Freshness and Savings to Your Table</h1>
            </div>
            <p className="mb-4">
              At our online fruit and vegetable store, we are committed to providing you with the freshest produce at
              prices lower than your local vendors. We directly source our products from the bustling vegetable markets,
              ensuring that you get the best quality while saving money.
            </p>
            <p className="mb-4">
              Our mission is to make healthy choices accessible to everyone. We believe that everyone should have access
              to fresh, nutritious fruits and vegetables without breaking the bank. With our user-friendly online platform,
              shopping for your favorite produce has never been easier.
            </p>
            <p>
              We take pride in our transparent sourcing process, ensuring that every product we offer meets our strict
              quality standards. Join us in our journey to create a healthier and happier community by making fresh fruits
              and vegetables a staple in your life.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
