import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({ first_name: "", last_name: "", email: "" });


  const navigate=useNavigate()
  const Submithandler = (e)=>{
    e.preventDefault()
    if(values===""){
      axios.post("http://localhost:3001/employees" , values)
      .then(res=>{
        console.log(res);
        navigate("/")
      })
    }
    else{
      alert("complite everything")
    }
   
  }
  return (
    <div  className="main-container">
      <div className="title-create">
        <p>Add employee</p>
      </div>
      <form onSubmit={Submithandler} className="form">
        <div className="info-form">
          <label htmlFor="name" >Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={(e) => setValues({ ...values,first_name: e.target.value })}
          />
        </div>
        <div  className="info-form">
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter LastName"
            onChange={(e) => setValues({ ...values, last_name: e.target.value })}
          />
        </div>
        <div  className="info-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div className="create-btn">
        <button className="btn-submit">Submit</button>
        <Link to={"/"}>
          <button className="btn-back">Back</button>
        </Link>
        </div>
       
      </form>
    </div>
  );
}

export default Create;
