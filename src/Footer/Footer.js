import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const copyright = this.props.data.copyright;

    return (
      <footer className='footer padding'>
        <p dangerouslySetInnerHTML={{ __html: copyright }} />
      </footer>
    );
  }
}

export default Footer;