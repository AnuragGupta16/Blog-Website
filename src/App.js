import logo from './logo.svg';
import './App.css';
import { Routes as Switch, Route } from "react-router-dom";

import { Box } from '@mui/system';
import BlogPage from './pages/Blogpage';
import Home from './pages/Home';
import { BrowserRouter} from 'react-router-dom';
function App() {
  return (
   
   
    <BrowserRouter >
  
    {/* <Box style={{ marginTop: 64 }}> */}

     <Switch>
            <Route path="/" element={< Home/>} />
            <Route path="/blogs" element={<BlogPage />} />
           
          </Switch>
          {/* </Box> */}
  
    </BrowserRouter>
    
    
    
  );
}

export default App;
