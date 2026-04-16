import React from 'react'

export const Greeting = ({name,age}) => {
  return (
    <div>
      <h1>{name}</h1>
      <br/>
      <p>{age}</p>
    </div>
  )
}

export default Greeting