import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [data,setData] = useState({user:'', pass:'', phone:"", email:""})
  
  const navigate = useNavigate();

  function handleChange(e){
    const {name, value} = e.target;
    setData(prevData => ({...prevData, [name]:value}))
  }

  function handleSubmit(e){
    e.preventDefault();
    
  if(data.email === localStorage.getItem('email') && data.pass === localStorage.getItem ('password') ) {
    alert("Already a user, Login please");
   }

  else if(localStorage.getItem('username') !== data.user && localStorage.getItem  ('password') !== data.pass){
    localStorage.setItem("username",data.user);
    localStorage.setItem("password",data.pass);
    localStorage.setItem("phone",data.phone);
    localStorage.setItem("email",data.email);
    alert(`Welcome ${data.user}`)
    navigate('/home');
   }
 
  }
  return (
    <div className='card'>
      <h1>Sign<span style={{color:'rgb(92, 172, 11)'}}>Up</span> Form</h1>
      <div className='form'>
        <form onSubmit={handleSubmit} >
          <label htmlFor="name">Username: </label>
          <input type="text" placeholder='Username' name='user' value={data.user} id='name' onChange={handleChange} required/><br /><br />

          <label htmlFor="pass">Password: </label>
          <input type="password" placeholder='Password' name='pass' value={data.pass} id='pass' onChange={handleChange} required/><br /><br />

          <label htmlFor="phone">Phone:</label>
          <input type="number" placeholder='Phone' name='phone' value={data.phone} id='phone' onChange={handleChange} required/><br /><br />
      
        <label htmlFor="email">Email:   </label>
          <input type="email" placeholder='Email' name='email' value={data.email} id='email' onChange={handleChange} required/><br /><br />

        <button type='submit'>SignUp</button>
          </form>
          
         <p>Already User <Link to='/login'>Login</Link></p> 

      </div>
    </div>
  )
}
