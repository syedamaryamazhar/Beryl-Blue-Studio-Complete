import React from "react";
import { Link } from 'react-router-dom';
import './header.css'

const Header =() => {
    return(
        <header className="header">
            <div className="container">
                <div className="top-header">
                    <img src="/images/search icon.svg" width="100" height="100" className="search-icon"/>

                    <Link to="/"><img className="logoimg" src="/images/logo.svg"/></Link>

                    <p className="top-rightnavicon">
                        <Link to="/">
                            <img src="/images/Bag icon.svg" width="30" height="30"/>
                        </Link>
                    </p>
                </div>
            </div>

            <div className="bottom-header">
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">ShopAll</Link>
                    <Link to="/">Albums</Link>
                    <Link to="/">Greeting Cards</Link>
                    <Link to="/">Bookmarks</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;