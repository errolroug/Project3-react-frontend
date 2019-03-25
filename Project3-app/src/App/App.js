import React, { Component } from 'react';
import Navigation from '../Nav/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome'


// import InputContainer from './Inputs/InputContainer'
import './App.css';

// import AccountFields from './AccountFields'
// import SurveyFields  from './SurveyFields'
// import Confirmation  from './Confirmation'
// var Success       = require('./Success')



class App extends Component {
  
  constructor(){
    super();
    this.state = {showModal : false}
  };

  onclick(){
    alert('testing!');
    const newState = this.state.showModal ? false:true;
    this.setState({showModal: newState})
    
  };

  handleName(e){
  e.preventDefault();
  alert(e.target['firstName'].value);
  };

  render() {
     return (
       <div>
       <Navigation/>

      <Router>
        <div>
          {/* Every page will render a Navbar and we have a switch case for the router */}
          
          {/* This will render a different component on the page */}
          <Route exact path="/" component={Welcome} />
          {/* <Route exact path="/myproperty" component={Properties} /> */}
        </div>
      </Router>  
      </div> 
    );
      
     

      
  
    ;
  }
}

export default App;


