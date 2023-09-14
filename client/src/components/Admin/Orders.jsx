import React, { Fragment, useEffect } from "react";
import Adfoot from "./Adfoot";
import Adnav from "./Adnav";
import {
  getAllOrders,
  clearErrors,
  deleteOrder,
} from "../../action/orderAction";
import Spinner from "../Loading/Spinner";
import {  useNavigate } from "react-router-dom";
import OrdersCard from "./OrdersCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_ORDER_RESET } from "../../constant/orderConstant";
const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, orders, loading } = useSelector((state) => state.allOrders);
  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
    if (deleteError) {
      dispatch(clearErrors());
      toast.error(deleteError, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }

    if (isDeleted) {
      dispatch({ type: DELETE_ORDER_RESET });
      toast.success("Order Deleted Successfully", {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
        onClose: () => {
          navigate("/admin/orders");
        },
      });
    }
    dispatch(getAllOrders());
  }, [dispatch, error, deleteError, isDeleted,navigate]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Adnav />
          <ToastContainer />
          <div className="container-xxl py-5">
            <div className="container">
              <div
                className="section-title text-center mx-auto wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "500px" }}
              >
                <h1 className="display-6">Orders</h1>
              </div>
              {orders &&
                orders.map((order, index) => (
                  <div
                    key={index}
                    className="panel .panel-primary border border-dark m-5 p-5"
                  >
                    <div class="panel-heading text-center text-primary m-5 p-5 fs-1">
                      ORDER {index + 1}
                    </div>
                    <div class="panel-body">
                      {order.orderItems.map((item) => (
                        <OrdersCard
                          item={item}
                          date={order.createdAt}
                          status={order.orderStatus}
                        />
                      ))}
                      <center>
                        <button
                          className="btn btn-primary btn-lg m-2"
                          onClick={() => {
                            deleteOrderHandler(order._id);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-dark btn-lg m-2"
                          onClick={() => {
                            navigate(`/admin/order/${order._id}`);
                          }}
                        >
                          Edit
                        </button>
                      </center>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <Adfoot />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Orders;
