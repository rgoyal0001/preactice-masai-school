import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login=()=>{
    const [password, setPassword] = React.useState("");
    const [username, setUserName] = React.useState("");
//     const navigate = useNavigate();

    
let localToken = localStorage.getItem('token');

  const handleLogin = async(e) => {
    e.preventDefault();
    const body = {
      username,
      password
    }
    // console.log(body);
    try {
      let data = await fetch('https://masai-api-mocker.herokuapp.com/auth/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      let response = await data.json();
      // console.log(token);
      console.log(response);
      if(response.error) {
        return alert(response.error)
    }
    let token = response.token;

    if(localToken){
        if(localToken === token){
            return alert("you are already logged in")
        }

        return alert("You need to logout first !")
    }
      alert('login success');

      localStorage.setItem('token', token);

      window.location.reload()



    } catch(error){
        console.log(error)
    }
}


    return(
        <div>
            <form onSubmit={handleLogin}>
                <h1>LogIn</h1>
                <div>
                    <input type="text" value={username} onChange={e=>setUserName(e.target.value)} id="" placeholder="Enter User name"/><br />
                    <input type="text" value={password} onChange={e=>setPassword(e.target.value)} id="" placeholder="Enter Password"/><br/>
        
                </div>
                <input type="submit" value='LOG IN' />
            </form>
        </div>
    )
}


export default Login