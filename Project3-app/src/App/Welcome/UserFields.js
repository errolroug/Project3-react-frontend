import React,{Component} from 'react';

class UserFields extends Component{
//    constructor (props){
//        super(props)
       
//    };


   render(){
       console.log(this.props);

       return(
        <div>
        <label>Name</label> 
        <input type="text"
               name ="name"
               value = {this.props.values["name"]}
            //    defaultValue={ this.props.fieldValues.name }
               onChange = {this.props.handleInputChange} />
  
        <label>Password</label>
        <input type="password"
               name ="password"
               value = {this.props.values["password"]}
            //    defaultValue={ this.props.fieldValues.password } 
               onChange = {this.props.handleInputChange}/>
  
        <label>Email</label>
        <input type="email"
               name ="email"
               value = {this.props.values["email"]}
            //    defaultValue={ this.props.fieldValues.email } 
               onChange = {this.props.handleInputChange}/>
  
        <button onClick={ this.props.saveValues }>Save and Continue</button>
        </div>
       )
   };

//    saveAndContinue (e) {
//     e.preventDefault();

//     // Get values via this.refs
//     // var data = {
//     //   name     : this.refs.name.getDOMNode().value(),
//     //   password : this.refs.password.getDOMNode().value(),
//     //   email    : this.refs.email.getDOMNode().value(),
//     // };

//     this.props.saveValues()
//     this.props.nextStep()
//   }

};

export default UserFields;