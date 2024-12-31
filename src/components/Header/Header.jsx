import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink style={{"margin-right": '20px'}} to='/'>Home</NavLink>
            <NavLink to='/login' >Log In</NavLink>
        </div>
    );
};

export default Header;