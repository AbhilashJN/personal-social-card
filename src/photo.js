import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo" >
        <img src="img.png" />
      </div>
    );
  }
}


export default Photo;
