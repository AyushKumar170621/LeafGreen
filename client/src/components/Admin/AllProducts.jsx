import React, { Fragment, useEffect } from 'react'
import Adnav from './Adnav'
import { useNavigate } from "react-router-dom";
import Adfoot from './Adfoot'
import Spinner from '../Loading/Spinner'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAdminProduct, clearErrors, updateProduct, deleteProduct } from "../../action/productAction";
import ProductCard from './Productcard';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PRODUCT_RESET, DELETE_PRODUCT_RESET } from "../../constant/productConstant";

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading: productsLoading, error, products } = useSelector((state) => state.products);
  const {
    loading,
    error: updateError,
    isUpdated,
    error: deleteError,
    isDeleted
  } = useSelector((state) => state.product);
  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(clearErrors());
    }

    dispatch(getAdminProduct());
  }, [dispatch, error]);

  const handleUpdate = (productId, currProduct) => {
    dispatch(updateProduct(productId, currProduct));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  // Centralized error handling
  useEffect(() => {
    if (deleteError || updateError) {
      const errorMessage = deleteError || updateError;
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      dispatch(clearErrors());
    }

    if (isDeleted) {
      dispatch({ type: DELETE_PRODUCT_RESET });
      toast.success("Product Deleted Successfully", {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
        onClose: () => {
          navigate("/admin/products");
        },
      });
    }

    if (isUpdated) {
      dispatch({ type: UPDATE_PRODUCT_RESET });
      toast.success("Product Updated Successfully", {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
        onClose: () => {
          navigate("/admin/products");
        },
      });
    }
  }, [dispatch, deleteError, updateError, isDeleted, isUpdated, navigate]);

  return (<><ToastContainer />
  {productsLoading ? <Spinner /> : <Fragment>
    <Adnav />
    <div className='row d-flex justify-content-center m-5'>
      {products && products.map((product) => (<ProductCard product={product} onUpdate={handleUpdate}
        onDelete={handleDelete} />))}
    </div>
    <Adfoot />
  </Fragment>}</>
  )
}

export default AllProducts