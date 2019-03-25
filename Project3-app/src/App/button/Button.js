
import React from 'react'; 
import {Button,Icon} from 'react-materialize';
// import Alert from './Alert'









const ButtonClick = ({onclick}) =>{
    return (
    <Button onClick={onclick}
    waves='light' >Click Me to go next!
    <Icon right>insert_chart</Icon></Button>)
}




export default ButtonClick;












