import React ,{useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { forgotPassword, clearErrors } from "../../action/userAction";
import "./styles.css";
const Forgot = () => {
  const [email,setEmail] = useState('');
  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );
  const dispatch = useDispatch();
  const submitHandler = (e)=> {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  } 
  useEffect(() => {
    if(error)
    {
      toast.error(error,{
        autoClose:2000,
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(clearErrors());
    }
    if(message)
    {
      toast.success(message,{
        position: toast.POSITION.TOP_CENTER,
        autoClose:2000,
      });
    }
  },[dispatch,error,message])
  return (
    <div className="outer">
    <ToastContainer/>
            <div className="containerfor">
        <form onSubmit={submitHandler}>
            <div className="inner-containerfor">

                <div className="heading-logo">
                    <h1>Forgot Password</h1>
                </div>
                <div className="input-forget">
                    <p>Enter Email</p>
                    <input id="email" className="inputfor" onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Enter your email" name="username" />
                    <i className='fa fa-email'></i>
                    <div className="error"></div>
                </div>
                <button type="submit" class="btn">Continue</button>  
            </div>
            
        </form>
        </div>
    </div>
  )
}

export default Forgot