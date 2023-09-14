import React, { Fragment,useEffect } from "react";
import Adnav from "./Adnav";
import Adfoot from "./Adfoot";
import { getAdminProduct } from "../../action/productAction";
import { getAllOrders } from "../../action/orderAction";
import {Chart as ChartJS,ArcElement,Tooltip,Legend,CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,} from "chart.js"
import { Doughnut, Line } from "react-chartjs-2";
import { getAllUsers } from "../../action/userAction";
import { useSelector,useDispatch } from "react-redux";
import "./extra.css"
import { Link } from "react-router-dom";
ChartJS.register(ArcElement,Tooltip,Legend,CategoryScale,LinearScale,PointElement,LineElement,Title)
const Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  
  const { orders } = useSelector((state) => state.allOrders);
  
  const { users } = useSelector((state) => state.allUsers);
  
  let outOfStock = 0;
  
  products &&
  products.forEach((item) => {
    if (item.Stock === 0) {
      outOfStock += 1;
    }
  });
  
  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);
  
  let totalAmount = 0;
  let len= 0;
  
  orders &&
  orders.forEach((item) => {
    totalAmount += item.totalPrice;
    len++;
  });
  
  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };
  
  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };
  return (
    <Fragment>
      <Adnav />
      <div className="row m-5">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Total Products
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {products.length}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Earnings (Annual)
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    Rs {totalAmount}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Orders
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                       {len}
                      </div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Users
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {users.length}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Earnings Overview
              </h6>
              <div className="dropdown no-arrow">
                <Link
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-area">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className=""></div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                  </div>
                </div>
                <Line data={lineState} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
              <div className="dropdown no-arrow">
                <Link
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className=""></div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                  </div>
                </div>
                <Doughnut data={doughnutState} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Adfoot />
    </Fragment>
  );
};

export default Dashboard;
