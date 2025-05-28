import React from 'react'
import Carousal from '../../Molecules/Carousal/carousal'
import Headings from '../../Atoms/Headings/Headings';
import Cards  from '../../Molecules/Cards/Cards'
import CountdownTimer from '../../Molecules/Timer/Timer'

import BachhriImage0 from '../../../Asset/Images/bachhri2017.jpg';
import BachhriImage1 from '../../../Asset/Images/bachhri2016.jpg';
import BachhriImage2 from '../../../Asset/Images/bachhri2024.jpg';

const slides = [
    {
      image: BachhriImage2,
      caption: '2024 Decoration',
    },
  {
    image: BachhriImage0,
    caption: '2017 Decoration',
  },
  {
    image: BachhriImage1,
    caption: '2016 Decoration',
  },
];

const targetDate = new Date('2025-09-21T00:00:00');

const Home = () => {
  return (
    <div>
    <CountdownTimer targetDate={targetDate}/>
      <Carousal slides={slides}/>
      <div className='main-content-wrapper'>
        <Headings headingLevel="h1" headingText="Bachhri Football Math Durga Puja Samiti" headingStyle="main-heading" />
        <Cards />
      </div>
    </div>
  )
}

export default Home
