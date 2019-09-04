import React, { Component } from 'react';

class Split extends Component {
  render() {
    const chars = [];
    const text = this.props.data;

    text.split('').forEach((char, index) => {
      const style = { "--char-index": index};
      chars.push(<span key={index} className="char" style={style}>{char}</span>);
    });

    return (
      chars.concat('')
    );
  }
}

export default Split;