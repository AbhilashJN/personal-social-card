import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="icon">{this.props.text}</div>
    );
  }
}
