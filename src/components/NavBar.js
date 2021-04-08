import React from 'react'
import avatar from '../images/avatar.jpg';
import {NavLink} from 'react-router-dom'

function NavBar() {
   
    
 const Year = () => {
        var date = new Date();
        var year = date.getFullYear();
        return year
    }
    
   
    
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="Profile" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/about' exact activeClassName='active'>
                            About
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to='/portfolios' exact activeClassName='active'>
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/blogs' exact activeClassName='active'>
                            Blogs
                        </NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to='/contact' exact activeClassName='active'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @<Year/> Made With <i className="em em-heart" role="presentation" label="HEAVY BLACK HEART"></i> in India.
                    </p>
                </footer>
            </nav>
            
        </div>
    )
}

export default NavBar
