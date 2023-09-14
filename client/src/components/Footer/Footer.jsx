import React from 'react';

const Footer = () => {
  return (
    
    
    <div className="container-fluid footer  py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Our Office</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>Clement Town, Dehradun</p>
                    <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>teamSimba@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="/about"><i className="fa fa-book">&nbsp;</i>About Us</a>
                    <a className="btn btn-link" href="/contact"><i className="fa fa-mail-bulk">&nbsp;</i>Contact Us</a>
                    <a className="btn btn-link" href="/"><i className="fa fa-wrench">&nbsp;</i>Our Services</a>
                    <a className="btn btn-link" href="/"><i className="fa fa-file">&nbsp;</i>Terms & Condition</a>
                    <a className="btn btn-link" href="/"><i className="fa fa-thumbs-up">&nbsp;</i>Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Business Hours</h4>
                    <p className="mb-1">Monday - Friday</p>
                    <h6 className="text-light">10:00 am - 08:00 pm</h6>
                    <p className="mb-1">Saturday</p>
                    <h6 className="text-light">09:00 am - 11:00 pm</h6>
                    <p className="mb-1">Sunday</p>
                    <h6 className="text-light">Closed</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Newsletter</h4>
                    <p>Monthly digest of whats new and exciting from us.</p>
                    <div className="position-relative w-100">
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Footer;
