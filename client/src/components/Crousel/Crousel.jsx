import React from 'react';

const Crousel = () => {
 
  return (
    <div className="container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/car1.jpg" alt="Sample Carousel"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 text-center">
                                    <p className="fs-4 text-white animated slideInDown">Welcome to <strong className="text-dark">Leaf Green</strong></p>
                                    <h1 className="display-1 text-dark mb-4 animated slideInDown">Fresh & Quality Vegetable</h1>
                                    <a href="https://leafgreen-1.onrender.com/products" className="btn btn-light rounded-pill py-3 px-5 animated slideInDown">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/car2.jpg" alt="Sample Carousel"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 text-center">
                                    <p className="fs-4 text-white animated slideInUp">Welcome to <strong className="text-dark">Leaf Green</strong></p>
                                    <h1 className="display-1 text-dark mb-4 animated slideInUp">Fresh & Quality Vegetable</h1>
                                    <a href="/products" className="btn btn-light rounded-pill py-3 px-5 animated slideInUp">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
    </div>
  );
};

export default Crousel;
