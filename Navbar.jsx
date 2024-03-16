import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <ul className='list'>
                <li><Link to='/home'>Home</Link></li>
                <pre><li><Link to='/'>   SignUp   </Link></li></pre>
            </ul>
        </nav>
    </div>
  )
}
