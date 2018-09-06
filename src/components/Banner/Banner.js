import React from 'react';
import './Banner.css';

import exampleImg from './exampleImg.png';

function Banner() {

  return (
    <div
      className='Banner'
      style={{
        backgroundImage: `url('${bannerContent.img}')`,
      }}
    >
      <div className='Banner__content'>
        <div className='Banner__logo'></div>
        <div className='Banner__name'>
          { bannerContent.name }
        </div>
        <div className='Banner__description'>
          { bannerContent.description }
        </div>
        <div className='Banner__button'>
          GET IT RECIPE
        </div>
      </div>
      <div className='Banner__change-menu'>
        <div className='Banner__circle'></div>
        <div className='Banner__circle'></div>
        <div className='Banner__circle'></div>
        <div className='Banner__circle'></div>
        <div className='Banner__circle'></div>
      </div>
    </div>
  )
}

export default Banner;

const bannerContent = {
  name: 'Bananas Foster Ice Cream Cake',
  description: `If you're looking for decadence, look no 
    further - you've found the Hole Grail of desserts.
    Honestly this cake makes us wonder why Bananas Foster
    hasn't always been served on top of ice cream cake`,
  img: exampleImg,
}