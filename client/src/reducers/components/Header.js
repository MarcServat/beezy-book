import React, { Component } from 'react';
import './Header.css';
import {Link, NavLink} from "react-router-dom";

class Header extends Component {

  render() {
    return (
        <header className="page-header">
          <a
              href="https://www.beezy.net/"
              rel="home">

            <img src={`${process.env.PUBLIC_URL}/logo.png`}
                 className="header-logo"
                 alt="logo" />
          </a>

          <div className="ui pointing navigation">
            <NavLink to="/books" className="item">
              Books
            </NavLink>
            <Link to="/genres" className="item">
              Genres
            </Link>
          </div>
        </header>
    );
  }
}

export default Header;
