import React,{useState,useEffect, Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import Spinner from '../Loading/Spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register,clearErrors } from '../../action/userAction';
import './register.css';
function Register(){
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [avatar, setAvatar] = useState("/profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/profile.png");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", user.name);
    myForm.set("email", user.email);
    myForm.set("password", user.password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error,{
        position: toast.POSITION.TOP_CENTER,
        autoClose:2000,
      })
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
        navigate("/profile");
    }
  }, [dispatch, error, isAuthenticated,navigate]);
  return (
    <Fragment>
    <ToastContainer/>
      {loading?<Spinner/>:<Fragment>
      <div className='regbody'>
    <div className="regcontainer">
      <form onSubmit={registerSubmit}>
        <div className="back-close">
          <h1>SIGN UP</h1>
          <p><a href="/"><i className='fa fa-backward'></i></a></p><br />
        </div>
        <div className="inner-container">
          <div className="reginput-box reguser-name">
            <p >Email:</p>
            <input id="email" type="email" onChange={registerDataChange} placeholder="Enter your email" required name="email"  />
            <div className="error"></div>
          </div>
          <div className="reginput-box reguser-name">
            <p>Name</p>
            <input id="name" type="text" onChange={registerDataChange} placeholder="Enter Name" required name="name" />
            <div className="error"></div>
          </div>
          <div className="reginput-box reguser-name">
            <p>Password:</p>
            <input id="password" type="password" placeholder="Enter password" required onChange={registerDataChange} name="password" />
            <div className="error"></div>
          </div>
          <div className="reginput-box reguser-name">
            <p>Select Avatar:</p>
            <input id="avatar" onChange={registerDataChange} type="file" accept="image/*" name="avatar" required/>
            <div className="error"></div>
          </div>

          <div className="forgot">
            <input id="check" type="checkbox" />
            <p>I agree to Farm's <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>.</p>
          </div>
          <button type="submit" className="btn">Sign Up</button>
          <div className="register-link">
            <p><span></span>Already a member?<span></span></p>
            <Link to="/login">Login</Link><label> to access your farms account</label>
          </div>
          <br />
        </div>
      </form>
    </div>
    </div>
      </Fragment>}
    </Fragment>
  );
}

export default Register;
