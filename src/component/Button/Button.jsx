import React from 'react'
import { string } from 'prop-types'

Button.propTypes = {
  lable: string.isRequired,
}

export function Button ({ label }) {
  return (
    <button>{label}</button>
  )
}
