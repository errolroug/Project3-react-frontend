import React, {Component} from 'react';
// import NavCom1 from './NavComponent1';
// import NavCom2 from './NavComponent2';
// import NavCom3 from './NavComponent3'
import './Nav.css'



class Navigation extends Component { 
render(){
        return ( 
            <nav className ="Nav-wrapper" >
                {/* <a href = "/"> <NavCom1 /> </a>
                <a href = "/myProperties"> <NavCom2  /></a> */}
              
            
        </nav>
        )
    }
};

export default Navigation;

// eslint-disable-next-line no-lone-blocks
{/* <nav>
        <div className="nav-wrapper #0091ea light-blue accent-4">
        <a href="/" className="brand-logo spacing-left">Google Books</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/mybooks">My Books</a></li>
            <li><a href="/">Search</a></li>
        </ul>
        </div>
    </nav> */}