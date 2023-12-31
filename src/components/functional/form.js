// Login form component
import React, {useState} from 'react';

function LoginForm(){
    const [formData, setFormData] = useState({
      name: '',
      password: ''
    });
  
    function handleChange(event){
      setFormData({...formData, [event.target.name]:event.target.value})
    }
    
    function handleLogin(event){
      event.preventDefault();
      console.log(formData);
    }
    
    function LoginButton(){
      return <button type='submit'>Log In</button>
    }
  
    return (
      <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="name" placeholder="Enter your username" value={formData.name} onChange={handleChange} required></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required></input>
            </div>
            <LoginButton />
      </form>
    )
  }

export default LoginForm