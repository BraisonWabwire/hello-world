import React from "react"

function NameList() {
    const names=['braison','calvin','branton']
  return (
    <div>
        {
            names.map(name=><h2>{name}</h2>)
        }
    </div>
  )
}

export default NameList