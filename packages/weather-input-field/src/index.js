import React from 'react'
import './input.css'

const InputField = ({ OnChange, }) => (
  <input styleName="search" placeholder="Search" onChange={OnChange} />
)

export default InputField
