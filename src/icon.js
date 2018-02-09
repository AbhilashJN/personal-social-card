import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href={`http://www.${this.props.iconClass}.com`} className={this.props.iconClass}><div />
        </a>
      </div>
    );
  }
}


export default Icon;
