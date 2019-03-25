import React, { Component } from 'react';
import UserPrompts from './Prompt1'



class TextContainer extends Component {

    render(){
        return(
            <div className=" text-container">
            
            <UserPrompts/>
            
            </div>
        )
    }
};

export default TextContainer;