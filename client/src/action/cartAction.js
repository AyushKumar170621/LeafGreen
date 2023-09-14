import {ADD_TO_CART,
REMOVE_CART_ITEM,
SAVE_SHIPPING_INFO,
GET_PRICE_FAIL,
GET_PRICE_REQUEST,
GET_PRICE_SUCCESS,} from "../constant/cartConstant";
import axios from "axios";
import { baseURL } from "./base";
// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`${baseURL}api/v1/product/${id}`);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

//GET ML PRICE 

export const getMlPrice = (vegetable='califlower',season='summer',month='apr',temp=37,deas=0,vcond='fresh') => async (dispatch)=>{
  try {
    console.log('here')
    dispatch({GET_PRICE_REQUEST});
    let link = `http://localhost:5000/getprice?vegetable=${vegetable}&season=${season}&month=${month}&temp=${temp}&deas=${deas}&vcond=${vcond}`;
    const { data } = await axios.get(link);
    dispatch({
      type: GET_PRICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRICE_FAIL,
      payload: error,
    });
  }
};