// src/components/PricePredictionForm.js
import React, { useState,Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
function PricePredictionForm() {
  const [vegetable, setVegetable] = useState("");
  const [date, setDate] = useState("");
  const [price,setData] = useState(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://madhavshree.pythonanywhere.com/getprice", {
        params: {
          vegetable: vegetable,
          date: date,
          month: month,
          year: year,
        },
        withCredentials: true, // Enable sending credentials with the request
      })
      .then((response) => {
        // Handle the response
        setData(response.data.price);
        // console.log(response.data.price)
        // console.log(data1);
      })
      .catch((error) => {
        // Handle errors
      });
  };

  return (
    <Fragment>
    <Navbar/>
    <div className="container d-grid justify-content-center bg-light p-5">
      <h2 className="mb-4">Vegetable Price Prediction</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="vegetable" className="form-label">
            Vegetable Name:
          </label>
          <select className="form-control" value={vegetable} onChange={(e) => setVegetable(e.target.value)}>
          <option value="Tomato">Tomato</option>
          <option value="Potato">Potato</option>
          <option value="Turnip">Turnip</option>
          <option value="Mango">Mango</option>
          <option value="Banana">Banana</option>
          <option value="Cabbage">Cabbage</option>
          <option value="Cauli">Cauli</option>
          <option value="Carrot">Carrot</option>
        </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            type="number"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="month" className="form-label">
            Month:
          </label>
          <input
            type="number"
            className="form-control"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Year:
          </label>
          <input
            type="number"
            className="form-control"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <center>
        <button type="submit" className="btn btn-primary">
        Predict Price
        </button>
        </center>
          
      </form>
      {price && (<p className="fs-4 text-center m-3"><b>Predicted Price :</b> {Math.round(price)}</p>)}
    </div>
    <Footer/>
    </Fragment>
  );
}

export default PricePredictionForm;
