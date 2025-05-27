import React from 'react'
import Image from '../../Atoms/Image/Image'
import Headings from '../../Atoms/Headings/Headings'
import BachhriImage from '../../../Asset/Images/bachhri2024.jpg';

const Contact = () => {
  return  (
    <div>
      <Image imgSrc={BachhriImage}/>
      <Headings headingLevel="h1" headingText="Contact Us - Bachhri Football Math Durga Puja Samiti" headingStyle="main-heading" />
        <div className='main-content-wrapper'>
            <ul>
                <li>
                    President : Kinkar Bhowmik
                </li>
                <li>
                    Secretary : Sujit Mallik
                </li>
                <li>
                    Trasurer : Pradip Mallik
                </li>
                <li>
                    Advertisement / Sponsore : Biswajit Manna
                </li>
                <li>
                    Advertisement / Sponsore : Amal Manna
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Contact
