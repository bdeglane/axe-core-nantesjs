import React, { Fragment } from 'react'
import { func, string, shape } from 'prop-types'

import './Input.css'

Input.propTypes = {
  label: string,
  name: string.isRequired,
  onChange: func.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  aria: shape({
    describedby: string
  })
}

export function Input({ label, name, onChange, type, value, aria = { describedby: '' } }) {
  return (
    <Fragment>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        aria-describedby={aria.describedby}
      />
    </Fragment>
  )
}
