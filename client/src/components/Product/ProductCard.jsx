import React from 'react'
import {  Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemsToCart } from "../../action/cartAction";
import { Rating } from '@mui/material';
import { getProductDetails } from '../../action/productAction';
const ProductCard = ({product}) => {
    const dispatch=useDispatch();
    const options={
        name:"product-rating",
        value:product.ratings,
        readOnly:true,
        precision:0.5,
    };
    const addToCartHandler= ()=>{
        dispatch(addItemsToCart(product._id,1));
        window.alert("Item sucessfully added to cart");
      }
    const maxDescriptionLength = 100;
    const handleclick = () =>{
        dispatch(getProductDetails(product._id))
    }
  // Check if the description is longer than the limit
  const truncatedDescription = product.description.length > maxDescriptionLength
    ? product.description.substring(0, maxDescriptionLength) + '...': product.description;
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="store-item position-relative text-center">
                        <img className="img-fluid" src={product.images[0].url} alt=""/>
                        <div className="p-4">
                            <h4 className="mb-3">{product.name}</h4>
                            <Rating {...options}/>
                            <h4 className="text-primary">'₹' {product.price}</h4>
                            <p>{truncatedDescription}</p>
                        </div>
                        <div className="store-overlay">
                            <Link to={`/product/${product._id}`}><button onClick={handleclick} className="btn btn-primary rounded-pill py-2 px-4 m-2">More Detail <i className="fa fa-arrow-right ms-2"></i></button></Link>
                            <button onClick={addToCartHandler} className="btn btn-dark rounded-pill py-2 px-4 m-2">Add to Cart <i className="fa fa-cart-plus ms-2"></i></button>
                        </div>
                    </div>
                </div>
            )
}

export default ProductCard