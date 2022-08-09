import React from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


async function register(body) {
    body = JSON.stringify({
      user: body
    });
    const response = await fetch(
      `https://masai-api-mocker.herokuapp.com/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body,
      }
    )
  
    const data = await response.json();
  
    return data;
  }


const Register=()=>{

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [username, setUserName] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [description, setdesription] = React.useState('');
    const [loading , setLoading] = React.useState(false);
    const [error , setError] = React.useState(false);

    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    const handleRegister =  (e) => {
        e.preventDefault();
        setLoading(true)
    
        register({name,email,password,mobile,username,description})
        .then((res)=>{
          if(token){
            return alert("You need to logout first !")
          }
           if(res.error) {
               return alert(res.error)
           }
          alert("Registration successful")
          navigate('/login')
        })
        .catch(err=>{
            setError(true)
        })
        .finally(() => {
             setLoading(false)
        })
      }



    return(
        <div>
        <form className='register-form' onSubmit={handleRegister}>
            <h1>Register</h1>
            <br />
            <input placeholder='Enter your name'  type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
            <input placeholder='Enter your mobile number'  type="number" name="mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br />
            <input placeholder='Enter your email' type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br />
            <input placeholder='Create password' type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br />
            <input placeholder='Enter username' type="password" name="username" value={username} onChange={(e)=>{setUserName(e.target.value)}}/> <br />
            <input placeholder='Enter description' type="password" name="description" value={description} onChange={(e)=>{setdesription(e.target.value)}}/> <br />
            <div id='register-button'>
                <input type="submit" value="Register"/>
                
            </div>
        </form>
        </div>
    )
}


export default Register;