// import React from 'react';
import React from 'react';
import {Modal,Button} from 'react-materialize';

// ADD css for this button in this folder

// button does not show modal



const Alert =({show}) =>{
    if(show){

        return( <div>
          <Modal header='Modal Header'trigger= {<Button ></Button>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
          </Modal>

      </div>
      )
    }
    else{
      return null;
    }
   
};

  export default Alert;