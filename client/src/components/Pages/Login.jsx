import React ,{useState,useEffect, Fragment} from "react";
import {login,clearErrors} from "../../action/userAction";
import { Link ,useNavigate} from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../Loading/Spinner";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({username:'',password:''});
    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
      );
    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user.username,user.password));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setUser({...user,[e.target.name]:e.target.value});
  }
  useEffect(() => {
    if (error) {
        toast.error(error,{
            position: toast.POSITION.TOP_CENTER,
            autoClose:2000,
        });
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
        toast.success("Logged In sucessfully",{
        autoClose:2000,
        position: toast.POSITION.TOP_CENTER,
        onClose: ()=>{
            navigate("/profile");
        }
        });
    }
  }, [dispatch, error, isAuthenticated,navigate]);
    return (
        <Fragment>
            {loading?<Spinner/>:<Fragment>
            <ToastContainer/>
            <div className="outer">
            <div className="containerjug">
        <form onSubmit={handleSubmit}>
            <div className="back-close">
                <p><Link to="/"><i className='fa fa-backward'></i></Link></p><br/>
            </div>
            <div className="inner-containerjug">

                <div className="heading-logo">

                    <h1>LOGIN</h1>
                </div>
                <div className="input-box user-name">
                    <p>Username:</p>
                    <input id="username" onChange={handleChange} type="text" placeholder="Enter your email" name="username" />
                    <i className='bx bxs-user-circle'></i>
                    <div className="error"></div>
                </div>
                <div className="input-box">
                    <p>Password:</p>
                    <input id="password" type="password" onChange={handleChange} placeholder="Enter your Password" name="password" />
                    <i className='bx bxs-lock' ></i>
                    <div className="error"></div>
                </div>

                <div className="forgot">
                    <label>Forgot Password?</label>
                    <Link to="/password/forgot">Click here</Link>
                </div>

                <button type="submit" className="btn">Sign in</button>  

                <div className="register-link">
                    <p>Not a member?</p>
                    <Link to="/register">Join</Link><label> to unlock the best of our farm</label>
                </div>
                <div className="terms">
                    <label>By proceeding you agree to our <Link href="#">Terms of use</Link></label>
                </div>
            </div>
            
        </form>
        
    </div>
        </div>
            </Fragment>}
        </Fragment>
    );
};
export default Login;