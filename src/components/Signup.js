import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import alertContext from "../context/alerts/alertContext";

const Signup = () => {
  const { showAlert } = useContext(alertContext);
    const [credentials, setCredentials] = useState({name: "" , email: "", password: ""}) 
    let navigate = useNavigate()
    // const navigate = 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_HOST}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json)

        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken); 
            navigate("/");
            showAlert({ message: "Account created successfully", type: "success" });

        }
        else{
            alert("Invalid credentials");
            console.log(json)
        }
    }
    
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  
    return (
      <>
      <h2>Create an account to use iNotes</h2>
  <div className='mt-4'>
      
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name='name' className="form-control" id="name" placeholder="Enter your Name" onChange={onChange} value={credentials.name} />
        </div>

        <div className="form-group my-3" >
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" name="email" id="email" value={credentials.email} onChange={onChange}aria-describedby="emailHelp" placeholder="Enter your email" />       
        </div>
        
       

        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name="password" className="form-control" id="password" placeholder="Enter your Password" value={credentials.password} onChange={onChange} />
        </div>    
        
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Signup;
