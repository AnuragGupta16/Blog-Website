import React, {  useEffect } from "react";
import Blogs from "../components/Blogs";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Categories from "../components/Categories";
import { useDispatch, useSelector } from "react-redux";
import { colors, Grid } from '@mui/material';
import { setUser,setAuthenticate } from "../redux/actions/actions";
function BlogPage()
{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let isUserAuthenticated = useSelector((state) => state.isAuthenticated);
    useEffect(() => {
        checkUserLoggedIn();
        
      }, [isUserAuthenticated]);
    
      // check if the user is logged in.
      const checkUserLoggedIn = async () => {
        try {
        
            if(localStorage.getItem("token"))
            {
          const res = await fetch(`https://api-staging-v2.sploot.space/api/v2/user`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const result = await res.json();
          
          if (result.data.data) {
        
            console.log(result.data.data);
           dispatch(setUser(result.data.data));
    
            // navigate(`/blogs/?category=${category}`)
        
            
          } else {
            dispatch(setUser(null));
            navigate("/", { replace: true });
          }
        }
        else{
            navigate("/");
        }
        } catch (err) {
            // navigate("/");
          console.log(err);
        }
    
    
      }
    

    // console.log(user);
    
   
    return (
        <div >
        
        <Header/>
       <Categories/>
       <Grid container item xs={12} sm={10} lg={13}>
        <Blogs/>
    </Grid>
    </div>
    )
};
export default BlogPage;