import React, { useState} from "react";

const ProductCard = ({ product, onUpdate, onDelete}) => {
  // const {
  //   loading,
  //   error: updateError,
  //   isUpdated,
  //   error: deleteError,
  //    isDeleted
  // } = useSelector((state) => state.product);
  const [isEditing, setIsEditing] = useState(false);
  const modifieddis = product.description.slice(0,50)+'...';
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [stock, setStock] = useState(product.stock);
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
    onDelete(product._id);
      // dispatch(deleteProduct(product._id));
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
    onUpdate(product._id, myForm);
  };
  
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
            <>
            <label htmlFor="name" className="form-label-style">Product Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={product.name}
              onChange={(e)=>{setName(e.target.value)}}
              className="form-control mb-2"
              />
            </>
          ) : (
            product.name
          )}
        </h5>
        <p className="card-text">
          {isEditing ? (
            <>
            <label htmlFor="description" className="form-label-style">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={modifieddis}
              onChange={(e)=>{setDescription(e.target.value)}}
              className="form-control mb-2"
              />
            </>
          ) : (
            modifieddis
          )}
        </p>
        <p className="card-text">
          {isEditing ? (<>
            <label htmlFor="stock" className="form-label-style">Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              id="stock"
              onChange={(e)=>{setStock(e.target.value)}}
              className="form-control mb-2"
            />
            </>
          ) : (
            `Stock: ${product.stock}`
          )}
        </p>
        <p className="card-text">
          {isEditing ? (<>
            <label htmlFor="price" className="form-label-style">Price</label>
            <input
              type="number"
              id="price"
              value={product.price}
              name="price"
              onChange={(e)=>{setPrice(e.target.value)}}
              className="form-control mb-2"
            />
            </>
          ) : (
            `Price: ${product.price}`
          )}
        </p>
        <p className="card-text">
          {isEditing ? (
              <>
                <label htmlFor="category" className="form-label-style">Category</label>
                <select className="form-select" id="category" aria-label="Default select example" value={product.category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="" selected disabled>Category</option>
                    <option value="Vegetable">Vegetables</option>
                    <option value="Fruit">Fruits</option>
                </select>
              </>
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
