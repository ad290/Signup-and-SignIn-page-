import React from 'react';
import { Link , useNavigate} from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const newData = {};
    for(const [name,value] of formData.entries()){
      newData[name] = value;
    }
    
    console.log(newData);
    
    if(newData.email === localStorage.getItem('email') && newData.pass === localStorage.getItem('password')){
      alert("Login Successfully");
      navigate('/home');
    }else{
      alert('Email or Password is not valid')
    }
    
  }

  return (
    <div className='card'>
         <h1>Sign<span style={{color:'rgb(92, 172, 11)'}}>In</span> form</h1>
         <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="email">Email ID:</label>
            <input type="email" id="email" name='email'placeholder='Email'/> <br /><br />
            <label htmlFor="pass">Password:  </label>
            <input type="password" name="pass" id="pass" placeholder='Password'/>
            <button type='submit'>SignIn</button>

         </form>
         <p style={{fontWeight:600, fontSize:'20px'}}>Create new Account <Link to='/signup'>SignUp</Link></p> 
    </div>
  )
}
