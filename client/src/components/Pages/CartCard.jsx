import React from "react";
import { useDispatch } from "react-redux";
import { addItemsToCart,removeItemsFromCart } from "../../action/cartAction";
const CartCard = ({item}) => {
const dispatch = useDispatch()
  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };
  return (
    <div className="col-md-8">
      <div
        className="cart-item border rounded p-3 d-flex align-items-center bg-white wow fadeIn"
        data-wow-delay="0.2s"
      >
        <img
          className="img-fluid me-3"
          src={item.image}
          alt="Tomato"
          style={{ "max-width": "100px" }}
        />
        <div>
          <h5 className="mb-2">{item.name}</h5>
          <p className="mb-2">
            Rs <span id="tpr">{item.price}</span> / kg
          </p>
          <div className="input-group mb-2">
            <input className="form-control" type="number" min="1" id="noi" value={item.quantity} />
            <button className="btn btn-primary" onClick={()=>{increaseQuantity(item.product,item.quantity,item.stock)}}>+</button>
            <p>&nbsp;</p>
            <button className="btn btn-primary" onClick={()=>{decreaseQuantity(item.product,item.quantity,item.stock)}}>-</button>
            <p>&nbsp;</p>
            <button className="btn btn-danger" onClick={()=>{deleteCartItems(item.product)}}>
              <i className="bi bi-trash"></i> Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
