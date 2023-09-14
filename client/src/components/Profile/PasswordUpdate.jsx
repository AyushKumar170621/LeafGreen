import React,{useState,useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from "react-redux";
import { UPDATE_PASSWORD_RESET } from "../../constant/userConstant";
import { updatePassword,clearErrors } from "../../action/userAction";
const PasswordUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 

  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(updatePassword(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error,{
        position: toast.POSITION.TOP_CENTER,
        autoClose:2000,
      })
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile Updated Successfully",{
        autoClose:2000,
        position: toast.POSITION.TOP_CENTER,
        onClose: ()=>{
          navigate("/profile");
        }
      })

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error,isUpdated,navigate]);
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={updatePasswordSubmit} className="w-50">
          <div className="form-floating my-2">
            <input
              type="password"
              className="form-control"
              name="oldPassword"
              id="floatingPassword1"
              onChange={(e)=>{setOldPassword(e.target.value);}}
              placeholder="Old Password"
            />
            <label htmlFor="floatingPassword1">Old Password</label>
          </div>
          <div className="form-floating my-2">
            <input
              type="password"
              className="form-control"
              onChange={(e)=>{setNewPassword(e.target.value);}}
              name="password"
              id="floatingPassword2"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword2">Password</label>
          </div>
          <div className="form-floating my-2">
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              onChange={(e)=>{setConfirmPassword(e.target.value);}}
              id="floatingPassword3"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword3"> Confirm Password</label>
          </div>
          <center>
            <button type="submit" className="btn btn-primary center my-2">submit</button>
          </center>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PasswordUpdate;
