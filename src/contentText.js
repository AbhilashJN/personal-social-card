import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ContentText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contentText">{this.props.text}</div>
    );
  }
}


export default ContentText;
