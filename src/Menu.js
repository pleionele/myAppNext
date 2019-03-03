import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href='/'>
                <a className="nav-link" href="#">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/speakers'>
                <a className="nav-link" href="#">Speakers</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/sessions">
                <a className="nav-link" href="#">Sessions</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Menu.PropTypes = {};
Menu.defaultProps = {};

export default Menu;