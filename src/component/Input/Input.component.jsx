import React, { Fragment } from 'react'
import { func, string } from 'prop-types'

import './Input.css'

Input.propTypes = {
  error: string,
  label: string,
  name: string.isRequired,
  onChange: func,
  type: string.isRequired,
  value: string.isRequired,
}

export function Input ({ error = null, label, name, onChange, required = false, type, value }) {
  return (
    <Fragment>
      {label && (
        <label htmlFor={name}>{label}</label>
      )}
      <input
        aria-describedby={name}
        aria-invalid={error !== null}
        aria-label={label}
        aria-required={required}
        id={name}
        name={name}
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
