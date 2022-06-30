//import "bootstrap/dist/css/bootstrap.min.css";
import './app.css'
import React from "react"
import MainImg from '../MainImg';

import ButtonAppBar from '../NavBar/index.js';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme';


function App() {
  return (
    <>
    <div className="App"></div>
     <ThemeProvider theme={theme}>
        <ButtonAppBar/>
        <section>
          <MainImg className ='frontImg'></MainImg>  
          </section>
         <h1 className ='strapline'>THE RIGHT KIND OF SHADY</h1>
       </ThemeProvider>    
    </>
  );
}

export default App;
