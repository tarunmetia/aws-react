import React from 'react'
import Image from '../../Atoms/Image/Image'
import Headings from '../../Atoms/Headings/Headings'
import BachhriImage from '../../../Asset/Images/bachhri2024.jpg';

const Donate = () => {
  return  (
    <div>
      <Image imgSrc={BachhriImage}/>
      <Headings headingLevel="h1" headingText="Donate Us - Bachhri Football Math Durga Puja Samiti" headingStyle="main-heading" />
        
        <div className='main-content-wrapper'>
        <p>
            As we prepare to celebrate the divine presence of Maa Durga, we invite you to be part of this sacred tradition by offering your support. Durga Puja is not just a festival — it is a spiritual journey that unites our community in devotion, culture, and joy.

            Your generous donation will help us with:
        </p>
            <ul>
                <li>
                    🌺 Installing the Durga idol
                </li>
                <li>
                🪔 Arranging bhajans, aartis, and cultural events
                </li>
                <li>
                🍛 Distributing prasadam and organizing community meals
                </li>
                <li>
                🙏 Every contribution — big or small — brings us closer to a grand and divine celebration.
                Let us come together to uphold our Sanatan Dharma and celebrate Shakti with devotion and pride.
                </li>
                <li>
                    <br />
                    <p>For donations and inquiries, please contact: 9874620406</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Donate
