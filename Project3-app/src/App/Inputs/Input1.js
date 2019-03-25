import React from 'react';





const FirstInput = ({handleName}) => {
    return (
        <form onSubmit={handleName} >
            <label>
                FirstName:<input type="text" id="firstName" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
  
    )
  
}

export default FirstInput;
