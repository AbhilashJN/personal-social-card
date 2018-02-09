import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BoldText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="boldText">{this.props.text}</div>
    );
  }
}

export default BoldText;
