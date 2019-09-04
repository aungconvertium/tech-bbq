import React, { Component } from 'react';
import './Banner.css';

import Split from '../Split/Split';

class Banner extends Component {
  render() {
    const title = "Party!";

    return (
      <section className="banner">
        <div data-splitting className="headline headline--jump">
          <Split data={title} />
        </div>
      </section>
    );
  }
}

export default Banner;