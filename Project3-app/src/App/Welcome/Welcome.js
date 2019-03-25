import React,{Component} from 'react';
import UserFields from './UserFields';
// import SurveyFields from './SurveyFields';
import Confirmation from './Confirmation';
import Success from './Success';
import axios from 'axios';


// var fieldValues = {
//     name     : null,
//     email    : null,
//     password : null,
    
//   };

class Welcome extends Component{
// This will be our multi form component;

 constructor(){
  super ();
  this.state ={
    step : 1,
    name : "",
    password : "",
    email : ""};

    this.fieldValues = {
        name     : null,
        email    : null,
        password : null,
        
      };
      this.handleInputChange = this.handleInputChange.bind(this);

 };

 handleInputChange(e){
     console.log(e.target)
   const name = e.target.name;
   const value = e.target.value;
   this.setState({[name]:value})
 };

 
saveValues () {
    console.log("saveValues has been hit")
    

    
      // Remember, `fieldValues` is set at the top of this file, we are simply appending
      // to and overriding keys in `fieldValues` with the `fields` with Object.assign
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      axios({
        url: 'https://localhost:8080/api/adduser',
        method: 'post',
        data: {
          foo: 'bar'
        }
      }).then(res => {

       
      })
    //   axios.post("https://localhost:8080/api/adduser")
    //   .then(res => {
    //     // const persons = res.data;
    //     // this.setState({ persons });
    //     console.log(res) 
    //   });
      
}; 
  
  nextStep() {
    this.setState({
      step : this.state.step + 1
    })
  };
  
  // Same as nextStep, but decrementing
  previousStep () {
    this.setState({
      step : this.state.step - 1
    })
  };


	getInitialState () {
		return {
			step: 1
		}
    };
    

	render() {
		// eslint-disable-next-line default-case
		switch (this.state.step) {
			case 1:
				return <UserFields fieldValues={this.fieldValues}
                                   nextStep={this.nextStep}
                                   saveValues={this.saveValues}
                                   handleInputChange ={this.handleInputChange}
                                   values = {this.state} />
			case 2:
				return <UserFields fieldValues={this.fieldValues}
                                     nextStep={this.nextStep}
                                     previousStep={this.previousStep}
                                     saveValues={this.saveValues} />
			case 3:
            return <Confirmation fieldValues={this.fieldValues}
                                 previousStep={this.previousStep}
                                 submitRegistration={this.submitRegistration} />
			case 4:
            return <Success fieldValues={this.fieldValues} />
				
		}
    }
    
  
}

export default Welcome;