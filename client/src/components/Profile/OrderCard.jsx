import React from "react";

const OrderCard = ({item,status}) => {
  return (
    <div className="d-flex justify-content-center">
    <div className="card mb-5 text-left bg-light" style={{maxWidth: '540px'}}>
      <div className="row g-0">
        <div className="col-md-7">
          <img src={item.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-5">
          <div className="card-body bg-dark">
            <h5 className="card-title text-primary text-center">{item.name}</h5>
            <p className="card-text text-light">
              <b>Quantity :</b>{item.quantity}
            </p>
            <p className="card-text text-light">
            <b>Total Price :</b>{item.quantity*item.price}
            </p>
            <p className="card-text text-light">
            <b>Order Status :</b>{status}
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderCard;
