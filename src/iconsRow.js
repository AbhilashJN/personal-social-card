import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Icon from './icon'

class IconsRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Icon text={iconname}/>
      <Icon text={iconname}/>
      <Icon text={iconname}/>
      <Icon text={iconname}/>
    );
  }
}
