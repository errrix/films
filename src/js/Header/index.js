import React from "react";
import { Link } from 'react-router-dom';



class Header extends React.Component {

    render() {
        // const {saveDataAction, totalPageAction, data} = this.props;
        return (
           <div>
               <ul>
                   <li>
                      <Link to='/'>Search</Link>
                   </li>
                   <li>
                      <Link to='/incinema'>Today in Cinema</Link>
                   </li>
               </ul>
           </div>
        )
    }
};


export default Header;
