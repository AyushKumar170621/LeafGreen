import {ADD_TO_CART,
SAVE_SHIPPING_INFO,
REMOVE_CART_ITEM,
GET_PRICE_FAIL,
GET_PRICE_SUCCESS,
GET_PRICE_REQUEST} from "../constant/cartConstant";

export const cartReducer = (
    state = { cartItems: [], shippingInfo: {} },
    action
  ) => {
    switch (action.type) {
      case ADD_TO_CART:
        const item = action.payload;
  
        const isItemExist = state.cartItems.find(
          (i) => i.product === item.product
        );
  
        if (isItemExist) {
          return {
            ...state,
            cartItems: state.cartItems.map((i) =>
              i.product === isItemExist.product ? item : i
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
  
      case REMOVE_CART_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((i) => i.product !== action.payload),
        };
  
      case SAVE_SHIPPING_INFO:
        return {
          ...state,
          shippingInfo: action.payload,
        };
  
      default:
        return state;
    }
  };

  export const mlReducer = (state ={}, action) => {
    switch(action.type){
      case GET_PRICE_FAIL:
        return {
          ...state,
          loading:false
        }
      case GET_PRICE_REQUEST:
        return{
          ...state,
          loading:true
        }
      case GET_PRICE_SUCCESS:
        return {
          loading:false,
          value:action.payload,
        }
      default:
        return state;
    }
  }