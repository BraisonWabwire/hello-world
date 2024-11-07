import React from 'react'

function Inline() {
    const Button={
        fontSize:'14px',
        width: '200px',
        height: '50px',
        backgroundColor:'grey',
        cursor:'pointer',
        outline:'none',
        border:'none',
        borderRadius:'10px',
        marginTop:'20px',
        color:'white'

    }
  return (
    <div>
        <button style={Button}>Click me</button>
    </div>
  )
}

export default Inline