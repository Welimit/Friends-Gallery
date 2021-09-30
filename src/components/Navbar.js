import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        We <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i  className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nva-items">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nva-items">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                    </li>
                    <li className="nva-items">
                        <Link to='/' className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
