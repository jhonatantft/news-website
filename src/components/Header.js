import React from 'react';
import { Link } from "react-router-dom";

/**
 * Builds navbar menu list according to `list param`
 * defined on parent component
 *
 * @param {Object[]} list props comming from parent
 * @returns {HTMLElement} list component with linkPath
 */
function retrieveLinkList(list) {
    return list.map((item, index) => {
        const linkPath = item.name.toLowerCase()
        const linkName = item.name
        return (
            <li key={index}>
                <a href={`/${linkPath}`} key={index}>{linkName}</a>
            </li>
        )
    })
}

class Header extends React.Component {
    render() {
        const menuLinkList = this.props.children ? this.props.children : []
        return (
            <nav className="header">
                <div className="container">
                    <a href="/home" className="logo">
                        <img src="https://res.cloudinary.com/dmuh3z4hu/image/upload/v1575159187/cheesecakelabs/logo.png" alt="News website logo"/>
                    </a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu">
                        {retrieveLinkList(menuLinkList)}
                        <li>
                            <a href='/login' className="login">LOGIN</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
  }
  
  export default Header