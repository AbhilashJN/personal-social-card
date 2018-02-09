import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TitleText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="titleText">{this.props.text}</div>
    );
  }
}
