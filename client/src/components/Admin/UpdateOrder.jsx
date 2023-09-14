import React,{useEffect,useState,Fragment} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrdersCard from './OrdersCard';
import Spinner from '../Loading/Spinner';
import Adnav from './Adnav';
import Adfoot from './Adfoot';
import { updateOrder,clearErrors,getOrderDetails } from '../../action/orderAction';
import { UPDATE_ORDER_RESET } from '../../constant/orderConstant';
import { useParams,useNavigate } from 'react-router-dom'
const UpdateOrder = () => {
    const {id} = useParams();
    const { order, error, loading } = useSelector((state) => state.orderDetails);
    const { error: updateError, isUpdated } = useSelector((state) => state.order);
    const updateOrderSubmitHandler = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("status", status);
    
        dispatch(updateOrder(id, myForm));
      };
      const [status, setStatus] = useState("");
      const dispatch = useDispatch();
      const navigate = useNavigate();
    useEffect(() => {
      if (error) {
        toast.error(error,{
          position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        dispatch(clearErrors());
      }
      if (updateError) {
        toast.error(updateError,{
          position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        dispatch(clearErrors());
      }
      if (isUpdated) {
        toast.success("Order Updated Successfully",{
          position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        dispatch({ type: UPDATE_ORDER_RESET });
      }
      dispatch(getOrderDetails(id));
    }, [dispatch, error, id, isUpdated, updateError,navigate]);
  return (
    <Fragment>
        <ToastContainer/>
        {loading ===undefined?(<Spinner/>):(<Fragment>
        <Adnav/>
        {order && (<div  className="panel .panel-primary border border-dark m-5 p-5">
                <div class="panel-heading text-center text-primary m-5 p-5 fs-1">ORDER</div>
                <div class="panel-body text-center">
                  {order.orderItems.map((item)=>(<OrdersCard key={order._id}  item={item} date={order.createdAt} status={order.orderStatus}/>))}
                  <p className='fs-4'><b>Payment Id :</b>{order.paymentInfo.id}</p>
                  <p className='fs-4'><b>Payment Status :</b>{order.paymentInfo.status}</p>
                  <form onSubmit={updateOrderSubmitHandler}>
                  <select onChange={(e) => setStatus(e.target.value)} style={{width:'40%'}}>
                      <option value="">Choose Status</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </select>
                    <button type='submit' className='btn btn-lg btn-primary m-2'>Update</button>
                  </form>
                </div>
        </div>)}
        <Adfoot/>
    </Fragment>)}
    </Fragment>
    
  )
}

export default UpdateOrder