import React from 'react'
function Person({person}) {
  return (
    <div>
        <h2>i am {person.name}, {person.age} years old and a professional {person.skill}</h2>
    </div>
  )
}

export default Person