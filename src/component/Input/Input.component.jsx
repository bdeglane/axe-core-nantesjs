import React, { Fragment } from 'react'
import { func, string, shape } from 'prop-types'

import './Input.css'

Input.propTypes = {
  error: string,
  label: string,
  name: string.isRequired,
  onBlur: func.isRequired,
  onChange: func.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  aria: shape({
    describedby: string
  })
}

export function Input ({ error, label, name, onBlur, onChange, required = false, type, value }) {
  return (
    <Fragment>
      {label && (
        <label htmlFor={name}>{label}</label>
      )}
      <input
        aria-describedby={name}
        aria-invalid={error !== undefined}
        aria-label={label}
        aria-required={required}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
      />
      {error && (
        <span aria-roledescription="alert" aria-live="polite" id={name}>
          {error}
        </span>
      )}
    </Fragment>
  )
}
