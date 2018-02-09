import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';


class AppContainer extends React.Component {
  render() {
    return (
      <div className="container" >
        <Card />

      </div>

    );
  }
}


export default AppContainer;
