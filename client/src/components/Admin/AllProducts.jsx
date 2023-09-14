import React,{Fragment,useEffect} from 'react'
import Adnav from './Adnav'
import Adfoot from './Adfoot'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getAdminProduct,clearErrors} from "../../action/productAction"; 
import ProductCard from './Productcard';
import { useDispatch,useSelector } from 'react-redux';


const AllProducts = () => {
    const dispatch = useDispatch();
    const { error,products } = useSelector((state) => state.products);
    useEffect(() => {
        if (error) {
          toast.alert(error,{
            autoClose:2000,
            position: toast.POSITION.TOP_CENTER,
          });
          dispatch(clearErrors());
        }
    
        dispatch(getAdminProduct());
      }, [dispatch, error]);
  return (
    <Fragment>
        <Adnav/>
        <ToastContainer/>
            <div className='row d-flex justify-content-center m-5'>
            {products && products.map((product)=>(<ProductCard product={product}/>))}
            </div>
        <Adfoot/>
    </Fragment>
  )
}

export default AllProducts