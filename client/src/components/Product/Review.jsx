import React, { useState,Fragment, useEffect } from "react";
import "./review.css";
import { useSelector } from "react-redux";
import { NEW_REVIEW_RESET } from "../../constant/productConstant";
import { useDispatch } from "react-redux";
import {newReview,clearErrors} from "../../action/productAction";
import { Rating } from '@mui/material';
import ReviewCard from "./ReviewCard";
const Review = ({productId,open,setVar,reviews}) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const dispatch = useDispatch();
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log(rating);
    const myForm = new FormData();
    myForm.set("productId",productId);
    myForm.set("comment",reviewText);
    myForm.set("rating",rating);
    dispatch(newReview(myForm));
    setVar(!open);
    setRating(0);
    setReviewText('');
  };
  const { success, error } = useSelector(
    (state) => state.newReview
  );
  useEffect(()=>{
    if(error)
    {
      window.alert(error)
      dispatch(clearErrors());
    }
    if (success) {
      window.alert("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
  },[dispatch,success,error]);
  return (
    <Fragment>
    {open && <div className="row">
      <div className="col-sm-6 review">
        <h3 style={{ color: "green" }} className="form-group">Leave a Review</h3>
        <form onSubmit={handleReviewSubmit}>
        <div className="form-group">
          <Rating value={rating} onClick={(e) => setRating(e.target.value)} precision={0.5}/>
        </div>
          <div className="form-group">
            <label>Review:</label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
          <button className="btn btn-sm btn-primary" type="submit">Submit Review</button>
          </div>
        </form>
      </div>
      <div className="col-sm-5 m-5">
          {reviews && reviews.map((review)=>(<ReviewCard review={review}/>))}
      </div>
    </div>}
    </Fragment>
  );
};

export default Review;
