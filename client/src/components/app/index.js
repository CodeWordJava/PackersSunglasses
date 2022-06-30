import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import MainImg from '../MainImg';
import H1 from '../H1message'
import ButtonAppBar from '../NavBar/index.js';

function App() {
  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <div id="introDiv">
                 <MainImg></MainImg> 
          <div id="innerIntro">
        <h1> <H1></H1></h1>
          </div>
        </div>
           
    </>
  );
}

export default App;
