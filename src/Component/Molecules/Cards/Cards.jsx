import React from 'react'
import './Cards.scss'
import DurgaIcon1 from '../../../Asset/Images/durga-45461.png'
import DurgaIcon2 from '../../../Asset/Images/durga-45471.png'
import DurgaIcon3 from '../../../Asset/Images/durga-45472.png'
import DurgaIcon4 from '../../../Asset/Images/durga-45475.png'
import DurgaIcon5 from '../../../Asset/Images/durga-45483.png'

const cardsItem = [
  {icon: DurgaIcon1, title: 'Maha Panchami', description: 'Saturday, September 27, 2025. Maha Panchami is considered the precursor to the grand Durga Puja celebrations. '},
  {icon: DurgaIcon2, title: 'Maha Sasthi', description: 'Sunday, September 28, 2025. Maha Sasthi marks the formal beginning of Durga Puja celebrations. It is believed that on this day, Goddess Durga arrives on Earth with her children. '},
  {icon: DurgaIcon3, title: 'Maha Saptami', description: 'September 29, 2025. The seventh day marks the beginning of the main Durga Puja festivities. Devotees perform the Navapatrika Snan, bathing nine plants symbolizing the nine forms of Goddess Durga. '},
  {icon: DurgaIcon4, title: ' Maha Ashtami', description: 'September 30, 2025. he eighth day is dedicated to Goddess Mahagauri, symbolizing purity and peace. This day is also associated with the legendary Sandhi Puja, commemorating the moment when Goddess Durga engaged in a fierce battle against Mahishasura and was attacked by the demons Chanda and Munda.'},
  {icon: DurgaIcon5, title: 'Maha Navami', description: 'October 1, 2025, The ninth day honors Goddess Siddhidatri, the giver of all siddhis (perfections). It is also the day for Ayudha Puja, where tools, books, and instruments are worshipped, acknowledging their importance in daily life.'},
  {icon: DurgaIcon1, title: 'Vijayadashami ', description: 'October 2, 2025. he tenth day celebrates the victory of Goddess Durga over the buffalo demon Mahishasura, symbolizing the triumph of good over evil. It is also the day when the idols of Goddess Durga are immersed in water, symbolizing her return to her celestial abode'},
]
const Cards = () => {
  return (
    <div className='card-wrapper'>
    {cardsItem.map((cItem, index)=>{
        return(
            <div className="card" key={index}>
              <div className="card-icon"><img src={cItem.icon} alt={cItem.title} className="card-icon" /></div>
              <h3 className="card-title">{cItem.title}</h3>
              <p className="card-description">{cItem.description}</p>
          </div>
        )
      })
    }
    </div>
  )
}

export default Cards
