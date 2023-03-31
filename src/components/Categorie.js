import React, { useEffect } from "react";
import "./Category.css";

import { AppBar, Toolbar, styled, Button ,Avatar} from '@mui/material';


import { useNavigate } from "react-router-dom/dist";
import { Link, useSearchParams } from 'react-router-dom';

function Categorie(props)
{
   const navigate = useNavigate();

     

   return (
      <Link to={`/blogs/?category=${props.slug}`}>

      <div   key={Math.random()} className="btn btn-danger boxcat">
      <Avatar  className="ava" alt="Remy Sharp" src={props.imageUrl}/>
      <h2 className='category-name' ><a href="#" >{props.name}</a></h2>
    
  </div>
  </Link>
   )
};
export default Categorie;