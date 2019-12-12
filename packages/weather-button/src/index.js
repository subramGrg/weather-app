import React from 'react'
import './button.css'

const buttonField = ({ OnSearch, text, }) => (
  <button data-testid="button" styleName="button" onClick={OnSearch}>{text}</button>
)

export default buttonField
