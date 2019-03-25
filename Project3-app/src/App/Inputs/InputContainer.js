import React ,{Component} from 'react';
import ImageContainer from './ImageContainer';
import TextContainer from './TextContainer';



class InputContainer extends Component{

    render(){
        return (
        <div className = "container">
         
         <ImageContainer />
         <TextContainer />
         

        </div>
    
        )
    }
};

export default InputContainer;


