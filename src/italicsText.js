import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ItalicsText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="italicsText">{this.props.text}</div>
    );
  }
}
