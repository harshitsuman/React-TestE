import React from 'react'
import Person from "../components/Person"

function NameList() {
    const persons = [
        {
            id: 1,
            name: "Harshit",
            age: 25,
            skill: "nodeJS"
        },
        {
            id: 2,
            name: "Rashmi",
            age: 20,
            skill: "React JS"
        },
        {
            id: 3,
            name: "Sunny",
            age: 25,
            skill: "nodeJS React js"
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person= { person } /> ) // index as a key
    return <div>{ personList }</div>
}

export default NameList