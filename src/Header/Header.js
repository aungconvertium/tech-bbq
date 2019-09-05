import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    const title = this.props.data.title;

    return (
      <header className='header padding'>
        <h1>{title}</h1>
      </header>
    );
  }
}

export default Header;