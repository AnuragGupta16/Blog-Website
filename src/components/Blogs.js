import React, { useContext } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import AuthContext from "../context/authcontext";
import { useNavigate } from "react-router-dom/dist";
import Blog from "./Blog";
function Blogs()
{
    const { user,setUser,Authenticated,setBlogs,blogs,setcategory } = useContext(AuthContext);
const [searchParams] = useSearchParams();
const navigate = useNavigate();
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
        setBlogs(result.data.data);

        
        console.log(result);
    
}
  changeblogs();
}, [category]);


return (

    <>
    {
        blogs?.length ? blogs.map(blog => (
            <Grid item lg={2} sm={blog.length/2} xs={12}>
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