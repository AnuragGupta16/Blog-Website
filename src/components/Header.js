
import "./Header.css"; 
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, styled, Button ,Avatar} from '@mui/material'; 

import { Link } from 'react-router-dom';
//  import About from '../about/about';
import { useNavigate } from 'react-router-dom';



import { setAuthenticate } from "../redux/actions/actions";



const Header = () => {
  let user = useSelector((state) => state.user);
  

    const navigate =useNavigate();
    const dispatch=useDispatch();
    
    const logout =()=>{
        localStorage.clear();
        dispatch(setAuthenticate(false));
      
        
    }
    return (
        

      <header class="header">
      <h1 class="logo"><a href="#">Blog Website</a></h1>
        <ul class="main-nav">
            <Link  className="userimage" >{user?user.name:null}</Link>
            <Link className="userimage" to= "https://anuraggupta16.github.io/My-Portfolio/">Portfolio</Link>
            <Link to='/' className="userimage" onClick={logout}> Logout </Link>
            <Avatar className="userimage" alt="Remy Sharp" src={user? user.photoUrl:null}/>
          
          
        </ul>
    </header> 
  
       
    )
}

export default Header;