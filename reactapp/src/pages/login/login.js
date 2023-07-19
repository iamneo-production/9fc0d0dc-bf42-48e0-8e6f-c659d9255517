import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

import "./login.css";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [details,setDetails] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async()=>{
        try{
        const response = await axios.get("http://127.0.0.1:2004/get");
        setDetails(response.data);
        console.log(response); 
        }
    catch(error){
       console.log("error fetching data");
    }
};

const handleSubmit  =() =>{
  if (details.some((user) => user.email === email && user.password === password)) {
    navigate("/home");
 }
 else{
     alert('user not found');
 }
};

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // Perform login logic and handle errors
  //   if (email === 'admin' && password === '1234567') {
  //     // Successful login, redirect or perform other actions
  //     console.log('Login successful!');
  //   } else {
  //     setError('Invalid credentials');
  //   }
  // };

  return (
    <div className='bod'>
    <form onSubmit={handleSubmit} id="form-login">
      <h2 id='hd'>Login</h2>
      <div>
      <label>Email:</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit" id="click">Login</button>
      <div className='head2'>
      <h3 id="move">Don't have account?<Link to="/register ">Register</Link></h3></div>
    </form>
    </div>
  );
};
const Login = () => {
    return (
      <div>
        <LoginForm />
      </div>
    );
};


