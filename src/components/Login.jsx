import React, { useState, useEffect } from 'react';

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import { textAlign } from '@mui/system';
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticate } from '../redux/actions/actions';

const Component = styled(Box)`
   background : white;
    width: 400px;
    margin: auto;   
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 200,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0',


});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    text-align:center;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: blue;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;


const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};


const Login = () => {
    const [login, setLogin] = useState(loginInitialValues);
    const dispatch = useDispatch();
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');
    
    const navigate = useNavigate();
   

    const imageURL = "https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png";

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        console.log(e.target.value);
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

  

    const loginUser = async () => {

        let response = await fetch('https://api-staging-v2.sploot.space/api/v2/auth/signin', {
            method: 'post',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        if (result.data) {
            
           console.log(result);
            localStorage.setItem("token", result.data.data.authToken);
           
           
            // setAccount({ name: response.data.name, username: response.data.username });
            
            
           
            dispatch(setAuthenticate(true));
            // isUserAuthenticated(true)
        //    setUser(result.data.data);
           navigate(`/blogs/?category=weekend-reads`)
        //  
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    
    

    return (
        <Component>
            <Box>

               
                <Image src={imageURL} alt="blog" />
                {
                   
                        <Wrapper>
                             <h2> Blog website</h2>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />

                            {error && <Error>{error}</Error>}

                            <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                            
                            
                        </Wrapper> 
                      
                }
            </Box>
        </Component>
    )
}

export default Login;