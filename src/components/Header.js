import React, { Component } from 'react';
import Type from "./Type";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Payments from './Payments';

import { Particle1 }  from './ParticleComponent';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    console.log(this.props);
    return (
      <React.Fragment>
  
      
      <header id="home">
        
         <nav id="nav-wrap">
         
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
                
            
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>              
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>

                {/* <li><Link to="/payments">Payments</Link></li> */}
            </ul>
           
         </nav>
       

        
        <Particle1 />
         <div className="row banner">
         
            <div className="banner-text">
            
               <h1 className="responsive-headline"> {resumeData.name}.</h1>

               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>
               < Type />
               
               </h3>
               
               {/* <hr/> */}
               
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>

            </div>
            
         </div>


         

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      
      </header>
      </React.Fragment>
    );
  }
}