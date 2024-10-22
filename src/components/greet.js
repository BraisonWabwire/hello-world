import React  from 'react'

const Greet=props=> {
    const {name,heroname}=props
    console.log()
return (
    <div>
        <h1>Hello {name} a.k.a {heroname}</h1>
        {/* {children} */}
    </div>
)
}
export default Greet