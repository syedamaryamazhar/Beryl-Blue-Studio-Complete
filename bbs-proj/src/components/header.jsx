import React from "react";

const Header =() => {
    return(
        <header className="header">
            <div className="container">
                <div className="top-header">
                    <img src=".public/images/search icon.svg" width="100" height="100" className="searchicon"/>

                    <Link to="/"><img className="logoimg" src=".public/images/logo.svg"/></Link>

                    <p className="top-rihtnavicon">
                        <Link to="/">
                            <img src=".public/images/Bag ison.svg" width="100" height="100"/>
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