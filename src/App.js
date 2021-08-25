import 'bulma/css/bulma.min.css';
import Box from 'bulma/package.json'
import Block from 'bulma/package.json'
import Image from 'bulma/package.json'
import React from 'react';
import index from './index'
import MagicButtom from './magic/MagicButton';
import Bulman from './magic/Bulman';

import {BrowserRouter as Router, Route} from "react-router-dom";




 /*import Container from "./components/uiElements/Container";*/
 
 //Path Verlinkung

function App () {
  return (
    <div className="App">
              <br/>
              <Router>
                <Route path='/MagicButton' component={MagicButtom}/>
      
              </Router>



              
              <br/>





              <br/>


                    Hero content: will be in the middle 
              <div class="hero-body">

                <div class="container has-text-centered">
                                <p class="title">
                                  Title
                                </p>
                                <p class="subtitle">
                                  Subtitle
                                </p>
                                <a class="button">
                            Button 1
                            </a>
                            <br/>
                            <a class="button is-danger is-loading">
                            Button 2
                            </a>
                            <a class="button is-fullwidth is-black is-large">
                            Button 3
                            </a>
                            <span class="icon-text">
                            <span class="icon ">
                              <i class="fas fa-train"></i>
                            </span>
                            <span>Paris</span>
                            <span class="icon">
                              <i class="fas fa-arrow-right"></i>
                            </span>
                            <span>Budapest</span>
                            <span class="icon">
                              <i class="fas fa-arrow-right"></i>
                            </span>
                            <span>Bucharest</span>
                            <span class="icon">
                              <i class="fas fa-arrow-right"></i>
                            </span>
                            <span>Istanbul</span>
                            <span class="icon">
                              <i class="fas fa-flag-checkered"></i>
                            </span>
                            </span>



                </div>

              </div>










  


    </div>
  )
} 





  
export default App;