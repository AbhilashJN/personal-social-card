import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pill from './pill';
import TitleText from './titleText';
import ItalicsText from './italicsText';
import ContentText from './contentText';
import BoldText from './boldText';
import Photo from './photo';
import IconsRow from './iconsRow';

class Card extends React.Component {
  render() {
    return (
      <div className="card" >
      <Pill text="Contact Me"/>
      <Photo link={imgLink}/>
      <TitleText text="Personal">
      <BoldText text="Social Card"/>
      <ContentText text={sampleContent}/>
      <ItalicsText text={sampleItalics}/>
      <IconsRow/>
      </div>
    );
  }
}
