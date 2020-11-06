import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'
export interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">
                    Home
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default NavBar;