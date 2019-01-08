import React from 'react';

/**
 * 
 * @param {string} htmlFor
 * @param {string} value
 */
export const Label = ({ htmlFor, value }) =>
    (<label
        htmlFor={htmlFor}>
        {value}
    </label >);
