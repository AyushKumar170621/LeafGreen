import React, { Fragment ,useEffect} from "react";
import OrderCard from "./OrderCard";
import Navbar from "../Navbar/Navbar";
import { redirect } from "react-router-dom";
import LeftPannel from "./LeftPannel";
import DisplayDelivery from "../Pages/DisplayDelivery";
import {myOrders,clearErrors} from "../../action/orderAction";
import { useSelector ,useDispatch} from "react-redux";
import Spinner from "../Loading/Spinner";
import Footer from "../Footer/Footer";
import {logout} from "../../action/userAction"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Order = () => {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector(
    (state) => state
    .user
  );
  const logoutHandler = () => {
    dispatch(logout());
    return redirect("/login");
  }
  useEffect( ()=>{
    if(error)
    {
      toast.alert(error,{
        autoClose:2000,
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  },[dispatch,error])
  return (
    <Fragment>
        <ToastContainer/>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Navbar />
          <div className="row">
            <LeftPannel user={user} logoutHandler={logoutHandler}/>
            <div className="col-sm-8 bg-primary mx-auto">
              <div
                className="section-title text-center mx-auto wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ "max-width": "500px" }}
              >
                <p className="fs-5 fw-medium fst-italic ">
                  Your Orders
                </p>
                <h1 className="display-6">Check Your Order</h1>
              </div>
              {orders && orders.map((order,index)=>(
                <div key={index}>
                  {order.orderItems.map((item)=>(<OrderCard item={item} status={order.orderStatus}/>))}
                </div>
              ))}
            </div>
          </div>
            <DisplayDelivery/>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Order;
