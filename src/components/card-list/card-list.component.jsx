import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = props => (
  <div className='card-list'>
    {props.elements.map(ele => (
      <Card ele={ele} />
    ))}
  </div>
)
