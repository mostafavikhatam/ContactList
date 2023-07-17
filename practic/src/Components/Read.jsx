import React from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect ,useState} from 'react';


function Read() {
  const [data, setData] = useState([]);
  const params = useParams()
  const userId =params.userId 
  useEffect(() => {
    axios
      .get(`http://localhost:3001/employees/`+userId)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className='main-container'>
        <div className='form'>
          <h4 className='datails'>Details</h4>
          <div className='read-data'>
            <p>Name:{data.first_name}</p>
          </div>
          <div className='read-data'>
            <p>lastName:{data.last_name}</p>
          </div>
          <div className='read-data'>
            <p>Email:{data.email}</p>
          </div>
          <div className="create-btn">
          <Link to={`/update/${userId}`}><button className='edite-btn'>Edite</button></Link>
          <Link to={"/"}><button className='btn-back'>Back</button></Link>
          </div>
        
        </div>
    </div>
  )
}

export default Read