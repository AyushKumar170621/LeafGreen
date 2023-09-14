import React, { useState, useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearErrors, resetPassword } from "../../action/userAction";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(token, myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error,{
        position: toast.POSITION.TOP_CENTER,
        autoClose:2000,
      })
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Password Updated Successfully",{
        autoClose:2000,
        position: toast.POSITION.TOP_CENTER,
        onClose: ()=>{
          navigate("/login");
        }
      })
    }
  }, [dispatch, error, success,navigate]);

  return (
    <Fragment>
    <ToastContainer/>
      <div className="outer">
        <div className="containerfor">
          <form onSubmit={resetPasswordSubmit}>
            <div className="inner-containerfor">
              <div className="heading-logo">
                <h1>Reset Password</h1>
              </div>
              <div className="input-forget">
                <p>Password</p>
                <input
                  id="fpassword"
                  className="inputfor"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter new Password"
                  name="password"
                />
                <i className="fa fa-email"></i>
                <div className="error"></div>
              </div>
              <div className="input-forget">
                <p>Confirm Password</p>
                <input
                  id="confirmPassword"
                  className="inputfor"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="confirm Password"
                  name="confirmPassword"
                />
                <i className="fa fa-email"></i>
                <div className="error"></div>
              </div>
              <button type="submit" class="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
