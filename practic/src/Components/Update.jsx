import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Update() {
  const params = useParams();
  const userId = params.userId;
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/employees/` + userId)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const Updatehandler = (e) => {
    e.preventDefault();
    

    e.preventDefault();
    axios
      .put(`http://localhost:3001/employees/` + userId, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };

  return (
    <div className="main-container">
      <div className="title-create">
        <p>Edite employee</p>
      </div>
      <h1 className="update">Update</h1>
      <form onSubmit={Updatehandler}  className="form">
        <div className="info-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={values.first_name}
            onChange={(e) =>
              setValues({ ...values, first_name: e.target.value })
            }
          />
        </div>
        <div className="info-form">
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter LastName"
            value={values.last_name}
            onChange={(e) =>
              setValues({ ...values, last_name: e.target.value })
            }
          />
        </div>
        <div className="info-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
       <div className="create-btn">
       <button className="update-btn">Update</button>
        <Link to={"/"}>
          <button className="btn-back">Back</button>
        </Link>
       </div>
      </form>
    </div>
  );
}

export default Update;
