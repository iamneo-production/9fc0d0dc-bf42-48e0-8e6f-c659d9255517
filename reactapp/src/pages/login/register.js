import React, { useState ,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email,setemail] = useState('');
    const [number,setNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    // const handleRegister = (e) => {
    //   e.preventDefault();
    //   // Perform registration logic and handle errors
    //   if (password !== confirmPassword) {
    //     setError('Passwords do not match');
    //   } else {
    //     // Successful registration, redirect or perform other actions
    //     console.log('Registration successful!');
    //   }
    // };

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
const isStrongPassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()]/.test(password);

  return (
      password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar
  );
};

const handleSubmit = () => {
    const data = {
      name: username,
      contact: number,
      email: email,
      password: password,
    }
    if (details.some((user) => user.email === email)) {
      alert('User already exists.');
  } else if (!isStrongPassword(password)) {
    alert("Please enter a strong password combination.");
}else{
    axios.post("http://127.0.0.1:2004/post", data);
    console.log(data);
    navigate("/");
}
  };

  
    return (
      <div className='bod-reg'>
      <form onSubmit={handleSubmit} id="regid">
        <h2 id='reg-h2'>Register</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            value={number}
            required
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div> */}
        {error && <p>{error}</p>}
        <button onClick="/login" type="submit" id='click'>Register</button>
      </form>
      </div>
    );
  };
  
  const Login = () => {
    return (
      <div>
        <RegistrationForm />
      </div>
    );
  };