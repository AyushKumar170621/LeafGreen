import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {clearErrors,updateProduct, deleteProduct} from "../../action/productAction";
import { useDispatch,useSelector } from "react-redux";
import { UPDATE_PRODUCT_RESET,DELETE_PRODUCT_RESET } from "../../constant/productConstant";

const ProductCard = ({ product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    loading,
    error: updateError,
    isUpdated,
    error: deleteError,
     isDeleted
  } = useSelector((state) => state.product);
  const [isEditing, setIsEditing] = useState(false);
  const modifieddis = product.description.slice(0,50)+'...';
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);


  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
      dispatch(deleteProduct(product._id));
  };


  const updateProductSubmitHandler = (e) => {
    e.preventDefault();
    handleSaveClick();
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateProduct(product._id, myForm));
  };
  useEffect(() => {

    if (deleteError) {
      toast.error(deleteError,{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      dispatch(clearErrors());
    }
    if(updateError)
    {
      toast.error(updateError,{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      dispatch(clearErrors());
    }
    if (isDeleted) {
      dispatch({ type: DELETE_PRODUCT_RESET });
      toast.success("Product Deleted Successfully",{
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
        onClose: () => {
          navigate("/admin");
        },
      });
      
    }
    if (isUpdated) {
      dispatch({ type: UPDATE_PRODUCT_RESET });
      toast.success("Product Updated Successfully",{
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
        onClose: () => {
          navigate("/admin");
        },
      });
    }

  }, [dispatch, updateError, deleteError, isDeleted, isUpdated, navigate]);
  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="card m-2 " style={{ width: "18rem" }}>
    <ToastContainer />
    <form onSubmit={updateProductSubmitHandler}>
      {isEditing ? (
        <input
          className="form-control"
          type="file"
          name="avatar"
          onChange={updateProductImagesChange}
          accept="image/*"
          id="formFile"
        />
      ) : (
        <img
          src={product.images[0].url}
          className="card-img-top"
          alt={product.name}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">
          {isEditing ? (
            <input
              type="text"
              name="name"
              onChange={(e)=>{setName(e.target.value)}}
              className="form-control mb-2"
            />
          ) : (
            product.name
          )}
        </h5>
        <p className="card-text">
          {isEditing ? (
            <input
              type="text"
              name="description"
              onChange={(e)=>{setDescription(e.target.value)}}
              className="form-control mb-2"
            />
          ) : (
            modifieddis
          )}
        </p>
        <p className="card-text">
          {isEditing ? (
            <input
              type="number"
              name="stock"
              onChange={(e)=>{setStock(e.target.value)}}
              className="form-control mb-2"
            />
          ) : (
            `Stock: ${product.stock}`
          )}
        </p>
        <p className="card-text">
          {isEditing ? (
            <input
              type="number"
              name="price"
              onChange={(e)=>{setPrice(e.target.value)}}
              className="form-control mb-2"
            />
          ) : (
            `Price: ${product.price}`
          )}
        </p>
        <p className="card-text">
          {isEditing ? (
            <select className="form-select" aria-label="Default select example" onChange={(e)=>{setCategory(e.target.value)}}>
                <option value="" selected>Category</option>
                <option value="Vegetable">Vegetables</option>
                <option value="Fruit">Fruits</option>
            </select>
          ) : (
            `Category: ${product.category}`
          )}
        </p>
        {isEditing ? (
          <div>
            <center>
              <button
                className="btn btn-success mx-2"
                type="submit"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </center>
          </div>
        ) : (
          <div>
            <button
              onClick={handleUpdateClick}
              className="btn btn-primary mx-2"
            >
              Update
            </button>
            <button onClick={handleDeleteClick} className="btn btn-danger">
              Delete
            </button>
          </div>
        )}
      </div>
      </form>
    </div>
  );
};

export default ProductCard;
