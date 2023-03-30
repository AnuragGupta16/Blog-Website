
import "./Header.css"; 

import { AppBar, Toolbar, styled, Button ,Avatar} from '@mui/material'; 

import { Link } from 'react-router-dom';
//  import About from '../about/about';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/authcontext';





const Header = () => {

  const { user,setUser ,isUserAuthenticated,Authenticated} = useContext(AuthContext);
    const navigate =useNavigate();
    
    
    const logout =()=>{
        localStorage.clear();
        isUserAuthenticated(false);
        
    }
    return (
        

      <header class="header">
      <h1 class="logo"><a href="#">{user?user.name:null}</a></h1>
        <ul class="main-nav">
            <Link  className="userimage" to= "/blogs/?category=weekend-reads">Home</Link>
            <Link className="userimage" to= "https://anuraggupta16.github.io/My-Portfolio/">Portfolio</Link>
            <Link to='/' className="userimage" onClick={logout}> Logout </Link>
            <Avatar className="userimage" alt="Remy Sharp" src={user? user.photoUrl:null}/>
          
          
        </ul>
    </header> 
  
       
    )
}

export default Header;