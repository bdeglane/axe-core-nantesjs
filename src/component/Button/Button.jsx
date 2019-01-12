import React from 'react'
import { func, string } from 'prop-types'

import './Button.css'

Button.propTypes = {
  label: string.isRequired,
  onClick: func,
}

export function Button ({ label, onClick }) {
  return (
    <button onClick={onClick}>{label}</button>
  )
}
