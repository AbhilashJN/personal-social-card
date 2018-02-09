import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Pill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="pill"> {this.props.text} </div>
    );
  }
}


export default Pill;
