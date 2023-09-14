import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
const LeftPannel = ({ setFaq, faqon, logoutHandler, user }) => {
  return (
    <div className="col-sm-4 bg-dark">
      <br />
      <br />
      <div className="continer bg-dark">
        <h1 className="text-primary">
          <sup>Hello,</sup> {user.name}
        </h1>
      </div>

      <div className="contianer">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link href="#">
          <i className="fa fa-box-open"></i>&nbsp; &nbsp;{" "}
          <Link to="/profile/orders">My Orders</Link>
        </Link>
      </div>
      <br />
      <div className="contianer">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link >
          <i className="fa fa-user-plus"></i>&nbsp; &nbsp; ACCOUNT SETTINGS
        </Link>
      </div>
      <div className="container">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link >
          &nbsp; &nbsp; &nbsp; <Link to="/profile">Profile Information</Link>
        </Link>
      </div>
      {user.role ==="admin" && <div className="container">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link >&nbsp; &nbsp; &nbsp;<Link to="/admin">Admin Pannel</Link></Link>
      </div>}
      <br />
      <div className="container">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <Link>
          <i className="fa fa-envelope-open"></i>&nbsp; &nbsp; MY STUFF
        </Link>
      </div>
      <div className="container">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link href="#">&nbsp; &nbsp; &nbsp;<Link to ="/profile/update"> Update Password</Link></Link>
      </div>
      <div className="container">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link
          href="#"
          onClick={() => {
            setFaq(!faqon);
          }}
        >
          &nbsp; &nbsp; &nbsp; View Faq's
        </Link>
      </div>
      <div className="container">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to='/price'>&nbsp; &nbsp; &nbsp; Predict Price</Link>
      </div>
      <br />
      <div className="container">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Link href="#" onClick={logoutHandler}>
          <i className="fas fa-sign-out-alt"></i>&nbsp; &nbsp; LOGOUT
        </Link>
      </div>
      <br />
    </div>
  );
};

export default LeftPannel;
