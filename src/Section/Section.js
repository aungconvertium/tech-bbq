import React, { Component } from 'react';
import './Section.css';

import Split from '../Split/Split';

class Section extends Component {
  render() {
    const title = this.props.data.title;
    const sectionClass = this.props.data.sectionClass;
    const animationStyle = this.props.data.animationStyle;

    return (
      <section className={sectionClass}>
        <div data-splitting className={`headline headline--${animationStyle}`}>
          <Split data={title} />
        </div>
      </section>
    );
  }
}

export default Section;