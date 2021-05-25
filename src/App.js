import React, { Component } from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import Testimonials from  './components/Testimonials';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
// import resumeData from './resumeData';
import Links from './Links'
// import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {BrowserRouter,Route} from "react-router-dom";
import Payments from './components/Payments';




class App extends Component {

  render() {
    return (
      
      <div className="App">
        <BrowserRouter>
               
            <Route exact path="/"><Links/></Route>
            <Route exact path="/payments"><Payments /></Route> 
        </BrowserRouter> 
          
        

        {/* <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/> */}
        

      </div>
    );
  }
}

export default App;