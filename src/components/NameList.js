import React from "react"
import Person from "./Person"

function NameList() {
    const names=['braison','calvin','branton']
    const persons = [
        {
            id: 1,
            age: 20,
            name: 'James',
            skill: 'engineer'
        },
        {
            id: 2,
            age: 23,
            name: 'Braison',
            skill: 'Engineer'
        },
        {
            id: 3,
            age: 25,
            name: 'Humphrey',
            skill: 'Doctor'
        }
    ]
    // const personList = persons.map(person =>(<Person key={person.id} person={person}/>) )
    const nameList=names.map((name,index)=><h2 key={index}> {index}{name}</h2>)
    return (
        <div>
            {/* {personList} */}
            {nameList}
        </div>
    )
}

export default NameList