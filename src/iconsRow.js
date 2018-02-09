import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Icon from './icon';

class IconsRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const iconname = './twitter.svg';
    return (
      <div className="iconsrow">
        <Icon text={iconname} />
        <Icon text={iconname} />
        <Icon text={iconname} />
        <Icon text={iconname} />
      </div>
    );
  }
}


export default IconsRow;
