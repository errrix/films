import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
           <header className={'header'}>
               <ul className={'nav-list'}>
                   <li>
                      <Link to='/'>ПОИСК</Link>
                   </li>
                   <li>
                      <Link to='/incinema'>СЕГОДНЯ В КИНОТЕАТРАХ</Link>
                   </li>
               </ul>
           </header>
        )
    }
};

export default Header;
