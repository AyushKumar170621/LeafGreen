import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../action/orderAction";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PaymentSucess = () => {
  const style = {
    width: '200px',
    margin: 'auto',
    backgroundColor: '#CCC',
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.newOrder);
  const [searchParams] = useSearchParams();
  const [payment] = useState(JSON.parse(localStorage.getItem("payment")));
  const [shipItems] = useState(
    JSON.parse(localStorage.getItem("shippingInfo"))
  );
  const [cartItems] = useState(JSON.parse(localStorage.getItem("cartItems")));

  useEffect(() => {
    const order = {
      shippingInfo: shipItems,
      orderItems: cartItems,
      paymentInfo: {
        id: searchParams.get("reffrence"),
        status: "sucessful",
      },
      itemsPrice: payment.itemsPrice,
      taxPrice: payment.taxPrice,
      shippingPrice: payment.shippingPrice,
      totalPrice: payment.totalPrice,
    };
    dispatch(createOrder(order));
    toast.success("Order Placed Sucessfully",{
      autoClose:2000,
      position: toast.POSITION.TOP_CENTER,
      onClose: ()=>{navigate("/profile");}
    });
    if (error) {
      window.alert(error);
    }
  }, [dispatch, error]);
  return <div style={{style}}><ToastContainer/> Payment Sucessfull</div>;
};

export default PaymentSucess;
