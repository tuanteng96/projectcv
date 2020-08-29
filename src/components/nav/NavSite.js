import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";

class NavSite extends Component {
    render() {
        return (
            <div className="nav-wrap">
                <ul className="nav">
                    <li className="nav__item">
                        <NavLink exact to="/gioi-thieu">About</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/ly-lich-ho-so">Resume</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/san-pham-ca-nhan">Portfolio</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/lien-he">Contact</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavSite;