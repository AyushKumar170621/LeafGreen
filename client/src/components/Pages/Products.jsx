import React ,{ Fragment, useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors,getProduct } from '../../action/productAction';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import ProductCard from "../Product/ProductCard";
import Footer from '../Footer/Footer';
import Spinner from '../Loading/Spinner';

const Products = () => {
    const [keyword,setKeyword] = useState("");
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0,25000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);

    const {
        products,
        loading,
        error,
        productsCount,
        resultPerPage,
        filteredProductsCount,
    } = useSelector((state) => state.products);

  
    const setCurrentPageNo = (e) => {
        if(e > 0 &&  filteredProductsCount-e*resultPerPage >= 0 )
        {
            setCurrentPage(e);
        }
        else if(filteredProductsCount % resultPerPage !== 0 && (e-1)*resultPerPage < filteredProductsCount)
        {
            setCurrentPage(e);
        }
    }
    // const priceHandler = ( event , newPrice) => {
    //     setPrice(newPrice);
    // }
    const handleSearchInputChange=(e) => {
        setKeyword(e.target.value);
    }
    const handleFilterSelect = (e) => {
        setCategory(e.target.value);
    }
    useEffect(() => {
        if(error){
            dispatch(clearErrors());
        }
        dispatch(getProduct(keyword,currentPage,price,category,ratings))
    },[dispatch,keyword,currentPage, price, category, ratings, error]);
  return (
    <Fragment>
         {loading?<Spinner/>:<Fragment>
         <Navbar/>
         <div className='container'>
         <div className="input-group m-5">
          <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
            <i className="fa fa-search" style={{ color: 'green', borderColor: 'green' }}></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={keyword}
            autoFocus={true}
            onChange={handleSearchInputChange}
            style={{ borderColor: 'green', maxWidth: '80%' }}
          />
          <select
            className="form-select"
            value={category}
            onChange={handleFilterSelect}
            style={{ maxWidth: '150px', marginRight: '90px', borderColor: 'green' }}
          >
            <option value="">Categories</option>
            <option value="Vegetable">Vegetables</option>
            <option value="Fruit">Fruits</option>
            {/* Add more filter options as needed */}
          </select>
        </div>
         </div>
  <div className="container-xxl py-5">
 
        <div className="container">
            <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{"maxWidth" : "500px"}}>
                <p className="fs-5 fw-medium fst-italic text-primary">Online Store</p>
                <h1 className="display-6">Fresh and Healthy Vegetables & Fruits</h1>
            </div>
            <div className="row g-4">
                
                {products && products.map((product) => <ProductCard key={product._id} product={product}/>)}
                
                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <Link className="btn btn-primary rounded-pill py-3 px-5" onClick={() => {setCurrentPageNo(currentPage-1)}}>Prev</Link>
                    <Link className="btn btn-primary rounded-pill py-3 px-5" onClick={() => {setCurrentPageNo(currentPage+1)}}>Next</Link>
                </div>
            </div>
        </div>
        <div className="modal" tabIndex="-1" id="nutritionalModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Nutritional Information</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p id="nutritionalDetails"></p>
                </div>
            </div>
        </div>
    </div>
   
    </div>
     <Footer/>
  </Fragment>}
  </Fragment>
    
    
  );
};

export default Products;
