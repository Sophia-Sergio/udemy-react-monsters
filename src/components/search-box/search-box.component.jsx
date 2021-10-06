import React, {useEffect} from 'react';
import './search-box.styles.css'



export const SearchBox = ({placeholder, onChange}) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={onChange}
  />
)
