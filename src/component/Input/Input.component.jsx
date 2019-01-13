import React, { Fragment } from 'react'
import { func, string, shape } from 'prop-types'

import './Input.css'

Input.propTypes = {
  error: string,
  label: string,
  name: string.isRequired,
  onChange: func.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  aria: shape({
    describedby: string
  })
}

export function Input ({ error = null, label, name, onChange, required = false, type, value }) {
export function Input({ label, name, onChange, type, value, aria = { describedby: '' } }) {
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
