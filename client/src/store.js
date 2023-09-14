import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
  newReviewReducer,
  newProductReducer,
  productReducer,
} from "./reducer/productReducer";
import {
  userReducer,
  profileReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducer/userReducer";

import {
  cartReducer,
  mlReducer,
} from "./reducer/cartReducer";

import { newOrderReducer,myOrdersReducer,allOrdersReducer,orderReducer,orderDetailsReducer } from "./reducer/orderReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user:userReducer,
  profile:profileReducer,
  forgotPassword:forgotPasswordReducer,
  newReview:newReviewReducer,
  cart:cartReducer,
  newProduct: newProductReducer,
  newOrder:newOrderReducer,
  myOrders:myOrdersReducer,
  allOrders:allOrdersReducer,
  allUsers: allUsersReducer,
  order: orderReducer,
  orderDetails: orderDetailsReducer,
  userDetails: userDetailsReducer,
  product:productReducer,
  mlPrice:mlReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};
const middleware = [thunk];

const store = configureStore(
  { reducer },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
