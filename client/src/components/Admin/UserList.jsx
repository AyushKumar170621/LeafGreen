import React,{Fragment,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adnav from './Adnav';
import Adfoot from './Adfoot';
import UCard from './UCard';
import { getAllUsers,clearErrors} from '../../action/userAction';
const UserList = () => {
    const dispatch = useDispatch();
    const { error, users } = useSelector((state) => state.allUsers);
    useEffect(() => {
        if (error) {
          toast.error(error,{
            position: toast.POSITION.TOP_CENTER,
            autoClose:2000,
          });
          dispatch(clearErrors());
        }
    
        dispatch(getAllUsers());
      }, [dispatch,  error]);
  return (
    <Fragment>
        <Adnav/>
        <ToastContainer/>
        <div class="row row-cols-1 row-cols-md-3 g-4  bg-light">
            {users && users.map((user)=>(<UCard user={user}/>))}
        </div>
        <Adfoot/>
    </Fragment>
  )
}

export default UserList