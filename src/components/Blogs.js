import React, { useContext } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import { Grid, Box } from '@mui/material';

import { useNavigate } from "react-router-dom/dist";
import Blog from "./Blog";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../redux/actions/actions";
function Blogs()
{
   
    let blogs= useSelector((state) => state.blogs);
const [searchParams] = useSearchParams();
const navigate = useNavigate();
const dispatch=useDispatch();
const category=(searchParams.get('category'));
useEffect(() => {
    const changeblogs=async ()=>
{
    
  console.log(category);
       const res = await fetch(`https://api-staging-v2.sploot.space/api/v2/public/cms/post-categories/${category}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const result = await res.json();
        dispatch(setBlogs(result.data.data));

        
        console.log(result);
    
}
  changeblogs();
}, [category]);


return (

    <>
    {
        blogs?.length ? blogs.map(blog => (
            <Grid item lg={3} sm={blog.length/2} xs={12}>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to={`${blog.redirectUrl}`}>
                    <Blog blog={blog} />
                </Link>
            </Grid>
        )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                No data is available for selected category
            </Box>
    }
</>


)

       
    
}
export default Blogs;