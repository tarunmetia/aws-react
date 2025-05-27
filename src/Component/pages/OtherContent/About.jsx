import React from 'react'
import Image from '../../Atoms/Image/Image'
import Headings from '../../Atoms/Headings/Headings'
import BachhriImage from '../../../Asset/Images/bachhri2024.jpg';

const About = () => {
  return (
    <div>
      <Image imgSrc={BachhriImage}/>
      <Headings headingLevel="h1" headingText="About Us - Bachhri Football Math Durga Puja Samiti" headingStyle="main-heading" />
        <div className='main-content-wrapper'>
        Established in 1966, Bachhri Football Math Durga Puja Samiti has been a proud torchbearer of tradition, unity, and devotion for over five decades. Rooted in the heart of our community, our Puja is not just a celebration—it's a symbol of togetherness, where faith meets festivity, and culture binds generations.

Our journey began with the humble efforts of a few devoted villagers, and today, it stands tall as one of the most respected Durga Puja organizations in the region. What sets us apart is the unwavering support and enthusiastic participation of the people from nine vibrant villages—Bachhri, Khajri, Khelo, Tripurapur, Sadashibpur, Palgoriya, Argoriya, Chilara, and Danpatiya. Each year, their collective spirit breathes life into every ritual, every decoration, and every moment of joy.

From the artistic beauty of the idols to the soul-stirring sound of dhak, from cultural programs to community feasts, our Durga Puja reflects a deep-rooted cultural heritage and a shared vision of harmony.

As we continue to celebrate Maa Durga’s homecoming each year, Bachhri Football Math Durga Puja Samiti remains committed to preserving our rich traditions while fostering a spirit of unity and joy for generations to come.
        </div>
    </div>
  )
}

export default About
