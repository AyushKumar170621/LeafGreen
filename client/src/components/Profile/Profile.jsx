import React,{useState, Fragment} from "react";
import Navbar from "../Navbar/Navbar";
import Faq from "./Faq"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout, clearErrors,updateProfile,loadUser } from "../../action/userAction";
import {  Link, Navigate, redirect } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "../../constant/userConstant";
import { useEffect  } from "react";
import LeftPannel from "./LeftPannel";
import Footer from "../Footer/Footer";
import Spinner from "../Loading/Spinner";
import { useSelector, useDispatch } from 'react-redux';
import "./profile.css";
const Profile = () => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [faqon,setFaq]=useState(false);
  const {isAuthenticated, user ,error,loading:uload } = useSelector((state) => state.user);
  const { error:proerror, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/profile.png");


  useEffect( () => {
    if(error)
    {
      toast.error(error,{
        autoClose:2000,
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(clearErrors());
    }
    if(proerror)
    {
      toast.error(proerror,{
        autoClose:2000,
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(clearErrors());
    }
    if (isUpdated) {
      toast.success("Profile Updated Successfully",{
        autoClose:2000,
        position: toast.POSITION.TOP_CENTER,
        onClose: () =>{
          dispatch(loadUser());
          dispatch({
            type: UPDATE_PROFILE_RESET,
          });
          <Navigate to="/profile" replace={true}/>
        }
      });
      
    }
    if(!isAuthenticated)
    {
      <Navigate to="/login" replace={true}/>
    }
    
  },[dispatch,isAuthenticated,user,error,proerror,isUpdated]);
  const logoutHandler = () => {
    dispatch(logout());
    return redirect("/login");
  }

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  return (
    <Fragment>
    <ToastContainer/>
      {uload?<Spinner/>:(<Fragment>
      <Navbar />
      <div className="row">
        <LeftPannel faqon={faqon} setFaq={setFaq} logoutHandler={logoutHandler} user={user}/>
        {!isEditMode ? <div className="col-sm-8 bg-primary">
        <div className="container m-0">
          <h1 className="text-dark">Profile Information </h1>
          <sub className="su">
            <b>
              <button className="btn-light btn" onClick={toggleEditMode}>Edit</button>
            </b>
          </sub>
          <br />
            <div className="row">
              <div className="col">
                <img src={user.avatar.url} id="profileimg"  alt="Profile Pic"/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  value={user.name}
                  readOnly
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  readOnly
                />
              </div>
            </div>
        </div>
      </div>:<div className="col-sm-8">
        <div className="container m-0">
          <h1 >Profile Information </h1>
          <sub className="su">
            <b>
              <button className="btn-light btn" onClick={toggleEditMode}>Edit</button>
            </b>
          </sub>
          <br />
          <form onSubmit={updateProfileSubmit}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname" >Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="fname"
                  required
                  name="name"
                  onChange={(e) => {setName(e.target.value)}}
                  placeholder="Your name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => {setEmail(e.target.value)}}
                  placeholder="YOUR EMAIL.."
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-50">
                <label htmlFor="lname">Select Avatar</label>
                <img src={avatarPreview} alt="Avatar Preview" height={50} width={50} />
              </div>
              <div className="col-50">
              <input
                  type="file"
                  accept="image/*"
                  id="avatar"
                  name="avatar"
                  onChange={updateProfileDataChange}
              />
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <center>
                <input type="submit" value="Submit" />
              </center>
            </div>
          </form>
        </div>
      </div>}
      {faqon && <Faq/> }
      </div>
      <Footer />
    </Fragment>)}
    </Fragment>
  );
};

export default Profile;
