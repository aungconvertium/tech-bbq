import React, { Component } from 'react';
import './Banner.css';

import Section from '../Section/Section';

class Banner extends Component {
  render() {
    const data = {
      title: 'Party!',
      sectionClass: 'banner',
      animationStyle: 'jump'
    };

    return (
      <Section data={data} />
    );
  }
}

export default Banner;