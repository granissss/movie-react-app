import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="nav__row">
            <Link to="/" onClick={() => localStorage.setItem("value", '')}>
                <span className="blue title">
                    filmr
                </span></Link>
                <ul className="nav__links">
                    <li className="nav__link" onClick={() => localStorage.setItem("value", '')}><Link to="/">Home</Link></li>
                    <li className="nav__link"><Link to="/">Find your movie</Link></li>
                    <li className="nav__link no-cursor" onClick={() => alert(`Haven't got around to doing this :(`)}><Link to="">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
