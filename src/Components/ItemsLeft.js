import React from 'react';
import '../StyleSheet/ItemsLeft.css';

export const ItemsLeft = ({count}) => {

  return (
    <div className='itemsLeft-container'>{count} Items Left</div>
  )
}
