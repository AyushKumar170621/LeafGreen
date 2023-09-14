import React,{useEffect, useState} from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom'; // Import Routes
import store from "./store";
import User from './components/Admin/User';
import PricePredictionForm from "./components/Profile/PricePredictionForm";
import UpdateOrder from  "./components/Admin/UpdateOrder"
import ProtectedRoute from './components/Route/ProtectedRoute';
import { loadUser } from './action/userAction';
import PasswordUpdate from './components/Profile/PasswordUpdate';
import Home from './components/Pages/Home';
import Forgot from "./components/Pages/Forgot";
import AdminProtectedRoute from './components/Route/AdminProtectedRoute';
import { useSelector } from 'react-redux';
import UserList from './components/Admin/UserList';
import AddProduct from './components/Admin/AddProduct';
import ResetPassword from "./components/Pages/ResetPassword";
import About from './components/Pages/About';
import AllProducts from './components/Admin/AllProducts';
import Order from "./components/Profile/Order"
import Orders from "./components/Admin/Orders"
import Dashboard from './components/Admin/Dashboard';
import Products from './components/Pages/Products';
import Login from './components/Pages/Login';
import Register from "./components/Pages/Register"
import Profile from './components/Profile/Profile';
import Cart from './components/Pages/Cart';
import Contact from './components/Pages/Contact';
import PaymentSucess from './components/Pages/PaymentSucess';
import Description from './components/Product/Description';
import Shipp from './components/Pages/Shipp';
import Shipping from './components/Pages/Shipping';
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    try {
      store.dispatch(loadUser());
    } catch (error) {
      
    }
  }, []);
  
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product/:id" element={<Description/>}/>
          <Route path="/password/forgot" element={<Forgot/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/password/reset/:token" element={<ResetPassword/>}/>
          <Route element={<AdminProtectedRoute user={user}/>}>
            <Route path="/admin" element={<Dashboard/>}/>
            <Route path="/admin/orders" element={<Orders/>}/>
            <Route path="/admin/addproduct" element={<AddProduct/>}/>
            <Route path="/admin/products" element={<AllProducts/>}/>
            <Route path="/admin/users" element={<UserList/>}/>
            <Route path="/admin/user/:id" element={<User/>}/>
            <Route path="/admin/order/:id" element={<UpdateOrder/>}/>
          </Route>
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profile/orders" element={<Order/>}/>
            <Route path="/profile/update" element={<PasswordUpdate/>}/>
            <Route path="/shipping" element={<Shipping/>}/>
            <Route path="/checkout" element={<Shipp/>}/>
          </Route>
          <Route path="/paymentsuccess" element={<PaymentSucess/>}/>
          <Route path="/price" element={<PricePredictionForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
