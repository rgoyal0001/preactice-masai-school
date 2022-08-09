import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import jwt_decode from "jwt-decode";


const SideBar=()=>{
    const style={
        margin:"10px",
        padding:"5px",
        background:"blue",
        color:"white",
        border:"none",
        textDecoration:"none"
    }

    
    const SECRET = "adkjvbhdjv";

    const [user, setUser] = React.useState({});
    const [login, setLogin] = React.useState(false);

    let token = localStorage.getItem('token');

    const logout = () => {
        localStorage.removeItem('token');
        setUser({});
    }

    
    React.useEffect(() => {

        if (token) {
            
            const decoded_user = jwt_decode(token, SECRET);
            console.log(decoded_user)
            const { id, name, email, mobile, username, description } = decoded_user
            setUser({
                id, name, email, mobile, username, description,
            })
            setLogin(true)
          
        } else {
            setLogin(false)
            console.log("token not found");
        }
    }, [token])

    return(
        <div style={{marginTop:"20px"}}>
            <div>
                <p>{user.username}</p>
                <Link to='/login' style={style}><button style={style} onClick={logout}>{login ? 'LogOut':'LogIn'}</button></Link>
            </div>            
            <Link to='/register' style={style}> Register</Link>

        </div>
    )
}


export default SideBar;