import React from 'react';
import './Recipe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import exampleImg from './exampleImg.png'

function Recipe() {

  const ingridients = fakeData.ingridients.map( (item, key) => {
    return <p key={ key }>{ item }</p>
  })

  return(
    <div className='Recipe'>
      <div className='Recipe__img'>
        <img src={ exampleImg } />
      </div>
      <div className='Recipe__description'>
        <div className='Recipe__heading'>
          { fakeData.name }
        </div>
        <div className='Recipe__stats'>
          <FontAwesomeIcon icon={ faClock } />
          { fakeData.cookingTime }mins&#160;
          <FontAwesomeIcon icon={ faUtensils } />&#160;
          { fakeData.difficult }
        </div>
        <div className='Recipe__text'>
          { ingridients }
          <div className='Recipe__heading Recipe__heading_small'>
            Directions
          </div>
          { fakeData.directions }
        </div>
      </div>
    </div>
  );
}

export default Recipe;

const fakeData = {
  name: 'Bananas Foster Ice Cream Cake',
  cookingTime: 15,
  difficult: 'Easy',
  ingridients:[
    `1 (8 ounce) container frozen whipped tapping, thawed`,
    `20 chocolate round wafers, divided`,
    `1 (7 1/4 ounce) bottle Smucker's Hot Dark Chocolat
      Microwaveable Topping, divided`
  ],
  directions: `ARRANGE 8 to 9 ice cream sandwiches in 9-inch
    square pan, cutting to form on even layer. Spread with half
    of whipped tapping. Microwave 1 cup of chocolate
    topping into small microwave-safe bowl on HIGH for 30 seconds
    \nDrizzle evenly over wafers.\nTOP with remaining 8 to 9 ice cream
    sandwiches to form an even layer.\n
    ARRANGE 8 to 9 ice cream sandwiches in 9-inch
    square pan, cutting to form on even layer. Spread with half
    of whipped tapping. Microwave 1 cup of chocolate
    topping into small microwave-safe bowl on HIGH for 30 seconds
    \nDrizzle evenly over wafers.\nTOP with remaining 8 to 9 ice cream
    sandwiches to form an even layer.\n`,
  img: exampleImg,
}