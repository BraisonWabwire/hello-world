import React  from 'react'

const Greet=({name,heroname})=> {
    console.log()
return (
    <div>
        <h1>Hello {name} a.k.a {heroname}</h1>
        {/* {children} */}
    </div>
)
}
export default Greet