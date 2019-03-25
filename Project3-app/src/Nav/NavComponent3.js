import React, {Component} from 'react';


class NavComponent3 extends Component { 
    render(){
            return ( 
                <nav>
                <div className="nav-wrapper">
                {/* <a href="#" class="brand-logo">Logo</a> */}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Sass</a></li>
                    <li><a href="/properties">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
                </div>
            </nav>
            )
        }
    };

    export default NavComponent3;