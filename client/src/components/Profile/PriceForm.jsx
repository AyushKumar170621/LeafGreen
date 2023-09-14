import React, { Fragment, useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useDispatch } from 'react-redux'
import axios from 'axios'
const PriceForm = () => {
    const dispatch = useDispatch();
    const[vegetable,setVege]=useState("");
    const[season,setSea]=useState("");
    const[month,setMon]=useState("");
    const[temp,setTem]=useState(37);
    const[deas,setDeas]=useState(0);
    const[vcond,setVcond]=useState("");
    const[data1,setData]=useState(null);
    const submitHandler = async(e)=>{
        e.preventDefault();
        console.log(vegetable,season,month,temp,deas,vcond);
        // let options = {
        //     mode: 'no-cors',
        //     method: 'get',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        // 'Content-Type': 'application/json'
        //     },
            
        // }
        // const {data} = axios.get(`http://ayushk1701.pythonanywhere.com/getprice?vegetable=${vegetable}&season=${season}&month=${month}&temp=${temp}&deas=${deas}&vcond=${vcond}`,{withCredentials: true});
        // console.log(data);
        axios.get('http://ayushk1701.pythonanywhere.com/getprice', {
            params: {
              vegetable: vegetable,
              season: season,
              month: month,
              temp: temp,
              deas: deas,
              vcond: vcond
            },
            withCredentials: true  // Enable sending credentials with the request
          })
          .then(response => {
            // Handle the response
            setData(response.data.price);
            // console.log(response.data.price)
            // console.log(data1);
          })
          .catch(error => {
            // Handle errors
          });
    }
  return (
    <Fragment>
    <Navbar/>
        <div className="container-xxl py-5">
                <div className="container">
                    <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ "maxWidth": "500px" }}>

                        <h1 className="display-6">Form 2</h1>
                    </div>
                </div>
            </div>
            <div className="container align-content-center">

                <div className="row m-5 p-5">
                    <div className="col ">
                        <form onSubmit={submitHandler}>
                        <div className="mb-3 ">
                                <label for="exampleInputEmail1" className="form-label">Vegetable Name</label>
                                <select name= "vege" className="form-select" aria-label="Default select example" onChange={(e)=>{setVege(e.target.value)}}>
                                    <option value ="" selected>Select</option>
                                    <option value="potato">Potato</option>
                                    <option value="tomato">Tomato</option>
                                    <option value="peas">Peas</option>
                                    <option value="pumpkin">Pumpkin</option>
                                    <option value="cucumber">Cucumber</option>
                                    <option value="pointed grourd">Pointed gourd</option>
                                    <option value="raddish">Raddish</option>
                                    <option value="bitter gourd">Bitter gourd</option>
                                    <option value="onion">Onion</option>
                                    <option value="garlic">Garlic</option>
                                    <option value="cabbage">Cabbage</option>
                                    <option value="califlower">Cauliflower</option>
                                    <option value="chili">Chili</option>
                                    <option value="okra">Okra</option>
                                    <option value="brinjal">Brinjal</option>
                                    <option value="ginger">Ginger</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Season</label>
                                <select name= "sea" className="form-select" aria-label="Default select example" onChange={(e)=>{setSea(e.target.value)}}>
                                    <option selected >Select</option>
                                    <option value="summer">Summer</option>
                                    <option value="monsoon">Monsoon</option>
                                    <option value="autumn">Autumn</option>
                                    <option value="winter">Winter</option>
                                    <option value="spring">Spring</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Month</label>
                                <select name= "mon" className="form-select" aria-label="Default select example" onChange={(e)=>{setMon(e.target.value)}}>
                                    <option selected >Select</option>
                                    <option value="jan">January</option>
                                    <option value="feb">February</option>
                                    <option value="march">March</option>
                                    <option value="apr">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="aug">August</option>
                                    <option value="sept">September</option>
                                    <option value="oct">October</option>
                                    <option value="nov">November</option>
                                    <option value="dec">December</option>
                                </select>
                            </div>
                            <label for="temp" className="form-label">Temperature</label>
                            <div className="input-group mb-3">
                                <input type="number" class="form-control" aria-label="Amount (to the nearest rupee)" onChange={(e)=>{setTem(e.target.value)}}/>
                                    <span className="input-group-text">&deg;C</span>
                            </div>
                            <div className="mb-3">
                                <label for="disaster" className="form-label">Disaster in last 3 months</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={(e)=>{setDeas(1)}} id="flexRadioDefault1"/>
                                        <label className="form-check-label pt-0" for="flexRadioDefault1" >
                                            Yes
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={()=>{setDeas(0)}} id="flexRadioDefault1"/>
                                        <label className="form-check-label pt-0" for="flexRadioDefault1" >
                                            No
                                        </label>
                                </div>
                            </div>
                            
                            <center>
                                <button className='btn btn-primary' type="submit">Submit</button>
                            </center>
                        </form>
                       {data1 && (<div className='text-center m-2 p-2'><b>Predicted Price :</b>{data1}</div>)}
                    </div>
                </div>

            </div>
            <Footer/>
    </Fragment>
  )
}

export default PriceForm
