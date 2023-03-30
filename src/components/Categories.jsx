import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Categorie from './Categorie';
import axios from 'axios'

const Categories = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategory = async () => {
            
      const res = await fetch(`https://api-staging-v2.sploot.space/api/v2/cms/post-categories`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await res.json();
            setCategories(result.data.data);
            
        }
        getCategory()
    }, [])

    const theme = createTheme();
    return (
        <>
        {/* {console.log(categories)} */}
            <h1 style={{ textAlign: 'center' }}>All Categories</h1>
            <ThemeProvider theme={theme}>
            {/* <Grid container spacing={2}> */}
            <div className='parent-container'>
                {categories.map(category =>
                    <Categorie key={Math.random()}
                       imageUrl={category.imageUrl}
                       name={category.name}
                       slug={category.slug}
                       
                       >
                    </Categorie>
                )}
           </div>
            {/* </Grid> */}
            </ThemeProvider>
            
        </>
    )
}

export default Categories;