import React from 'react';
import './search-box.styles.css';

export const Searchbox = ({placeholder , handlingOnchange}) => (
    <input 
    className = 'search'
    onChange ={handlingOnchange}
    type = 'Search'
    placeholder = {placeholder}/>
)