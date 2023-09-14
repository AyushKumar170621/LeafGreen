import React, { useState } from "react";

const OrdersCard = ({item,date,status}) => {
    const [orderDate] = useState(new Date(date))
    const Odate = orderDate.toDateString();
  return (
    <div className="card mb-4 w-100">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.image}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            <h2 className="card-title h1">{item.name}</h2>
            <p className="card-text h3">{Odate}</p>
            <p className="card-text h3"><b>Quantity :</b>{item.quantity}</p>
            <p className="card-text h3">
              <small className="text-body-secondary text-success">
                Status: {status}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrdersCard;
