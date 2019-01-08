import React from 'react';

/**
 * 
 * @param {string} type
 * @param {string} value
 * @param {string} name
 * @param {(string)=> void)} onChange
 */
export const Input = ({ type, value, name, onChange }) =>
    (<input
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
    />);
