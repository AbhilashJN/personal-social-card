import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Icon from './icon';

class IconsRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const iconname1 = 'ball';
    const iconname2 = 'behance';
    const iconname3 = 'linkedin';
    const iconname4 = 'twitter';
    return (
      <div className="iconsrow">
        <Icon iconClass={iconname1} />
        <Icon iconClass={iconname2} />
        <Icon iconClass={iconname3} />
        <Icon iconClass={iconname4} />
      </div>
    );
  }
}


export default IconsRow;
