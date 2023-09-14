import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Contact = () => {
  return (
    <div>
        <Navbar/>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container text-center py-5">
        <h1 className="display-2 text-dark mb-4 animated slideInDown">Contact Us</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            {/* <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item text-dark" aria-current="page">Contact</li> */}
          </ol>
        </nav>
      </div>
    </div>
    <div className="container-xxl contact py-5">
      <div className="container">
        <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
          <p className="fs-5 fw-medium fst-italic text-primary">Contact Us</p>
          <h1 className="display-6">If You Have Any Query, Please Contact Us</h1>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
            {/* <div className="btn-square mx-auto mb-3">
                <i className="fa fa-envelope fa-2x text-white"></i>
            </div> */}
            <p className="mb-2">teamSimba@gmail.com</p>
            {/* <p className="mb-0">support@example.com</p> */}
          </div>
          <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
            {/* <div className="btn-square mx-auto mb-3">
                <i className="fa fa-phone fa-2x text-white"></i>
            </div> */}
            <p className="mb-2">+91 7004714475</p>
            {/* <p className="mb-0">+012 345 67890</p> */}
          </div>
          <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
            {/* <div className="btn-square mx-auto mb-3">
                <i className="fa fa-map-marker-alt fa-2x text-white"></i>
            </div> */}
            <p className="mb-2">Clement town</p>
            <p className="mb-0">Dehradun, Uttarakhand</p>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            {/* <h3 className="mb-4">Need a functional contact form?</h3>
            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="fname" placeholder="First Name" />
                    <label htmlFor="name">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="lname" placeholder="Last Name" />
                    <label htmlFor="name">Last Name</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="number" placeholder="Your Number" />
                    <label htmlFor="number">Mobile Number</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "120px" }}></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <iframe title="Area Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27566.569888347316!2d77.9959486507704!3d30.270674257437854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092befa7608ead%3A0xe723fed2168f7a8d!2sClement%20Town%2C%20Dehradun%2C%20Uttarakhand%20248002!5e0!3m2!1sen!2sin!4v1692117920364!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
<Footer/>
    </div>
  );
};

export default Contact;
