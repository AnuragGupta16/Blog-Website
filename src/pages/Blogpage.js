import React, { useContext, useEffect } from "react";
import Blogs from "../components/Blogs";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authcontext";
import Header from "../components/Header";
import Categories from "../components/Categories";

import { colors, Grid } from '@mui/material';
function BlogPage()
{
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

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