import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data , setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const Deletehandler = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm==true) {
      axios
        .delete("http://localhost:3001/employees/"+id )
        .then((res) => 
          location.reload()
        )
        .cathch((err) => console.log(err));
    }
  };

  return (
    <div className="main-container">
      <Link to={"/create"}>
        <button className="btn-add">Add</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/update/${item.id}`}>
                  <button className="btn-edite">Edite</button>
                </Link>
                <button onClick={(e) => Deletehandler(item.id)} className="btn-delete">Delete</button>
                <Link to={`/read/${item.id}`}>
                  <button className="btn-read">Read</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
