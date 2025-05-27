import React from 'react';
import './Headings.scss'

const Headings = ({ headingLevel, headingText, headingStyle }) => {
  let heading;

  switch (headingLevel) {
    case 'h1':
      heading = <h1 className={headingStyle}>{headingText}</h1>;
      break;
    case 'h2':
      heading = <h2 className={headingStyle}>{headingText}</h2>;
      break;
    case 'h3':
      heading = <h3 className={headingStyle}>{headingText}</h3>;
      break;
    case 'h4':
      heading = <h4 className={headingStyle}>{headingText}</h4>;
      break;
    case 'h5':
      heading = <h5 className={headingStyle}>{headingText}</h5>;
      break;
    case 'h6':
      heading = <h6 className={headingStyle}>{headingText}</h6>;
      break;
    default:
      heading = <p className={headingStyle}>{headingText}</p>; // fallback
  }

  return <div>{heading}</div>;
};

export default Headings;
