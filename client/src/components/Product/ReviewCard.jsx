import React from 'react'
import { Rating } from '@mui/material';
const ReviewCard = ({review}) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div class="card">
  <div class="card-header text-center">
    Featured
  </div>
  <div class="card-body text-left">
    <h5 class="card-title"><b>User :</b>{review.name}</h5>
    <p class="card-text"><b>Comments :</b>{review.comment}</p>
    <Rating {...options}/>
  </div>
</div>
  )
}

export default ReviewCard