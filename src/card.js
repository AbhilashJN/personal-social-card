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
    const sampleContent = 'Click one of the social icons below to switch between card or click Contact Me link to show the contact form card.';
    const sampleItalics = 'Make sure you\'re running this experiment in the latest Chrome browser.';
    const imgLink = 'person3.png';
    return (
      <div className="card" >
        <Pill text="CONTACT ME" />
        <Photo link={imgLink} />
        <TitleText text="Personal" />
        <BoldText text="Social Card" />
        <ContentText text={sampleContent} />
        <ItalicsText text={sampleItalics} />
        <IconsRow />
      </div>
    );
  }
}


export default Card;
