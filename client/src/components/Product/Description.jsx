import React, { Fragment, useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import Review from "./Review"
import { clearErrors, getProductDetails } from "../../action/productAction";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Rating } from '@mui/material';
import { addItemsToCart } from "../../action/cartAction";
import Footer from "../Footer/Footer";
const Description = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const addToCartHandler= ()=>{
    dispatch(addItemsToCart(product._id,1));
    window.alert("Item sucessfully added to cart");
  }
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);
  return (
    
      <Fragment>
        {loading ? "loading....":<Fragment>
          <Navbar />
          <div className="container-xxl py-5">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                  <img
                    className="img-fluid artimg"
                    src={product.images[0].url}
                    alt=""
                  />
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="section-title">
                    <h1 className="display-6">{product.name}</h1>
                    <h4 className="text-primary">
                      &#x20a8; {product.price} / Kg
                    </h4>
                    <Rating value={product.ratings} readOnly={true} precision={0.5}/>
                  </div>
                  <p className="mb-4">{product.description}</p>
                  <Link
                    className="btn btn-primary rounded-pill py-2 px-4 m-2"
                    onClick={addToCartHandler}
                  >
                    Add to Cart <i className="fa fa-cart-plus ms-2"></i>
                  </Link>
                  <Link
                    onClick={handleToggle}
                    className="btn btn-primary rounded-pill py-2 px-4 m-2"
                  >
                    Submit a Review <i className="fa fa-thumbs-up ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Review productId={product._id} open={isOpen} setVar={setIsOpen} reviews={product.reviews}/>
          <Footer />
        </Fragment>

        }
      </Fragment>

  );
};

export default Description;
