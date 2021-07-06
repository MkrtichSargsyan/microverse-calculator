import React from 'react'
import '../index.css'


export default function Button({buttonName,className}) {
  return (
    <button className={className}>
      {buttonName}
    </button>
  )
}
