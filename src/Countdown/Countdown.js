import React, { Component } from 'react';
import './Countdown.css';

import Section from '../Section/Section';

class Countdown extends Component {
  render() {
    const data = {
      title: 'Countdown',
      sectionClass: 'countdown',
      animationStyle: 'twirl'
    };

    return (
      <Section data={data} />
    );
  }
}

export default Countdown;