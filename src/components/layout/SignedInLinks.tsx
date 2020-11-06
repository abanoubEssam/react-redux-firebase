import React from 'react'
import { NavLink } from 'react-router-dom';

export interface SignedInLinksProps {

}

const SignedInLinks: React.FC<SignedInLinksProps> = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/create-project">New Project</NavLink>
            </li>
            <li>
                <NavLink to="/">Log Out</NavLink>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">AE</NavLink>
            </li>
        </ul>
    );
}

export default SignedInLinks;