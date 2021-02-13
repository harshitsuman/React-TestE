import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component { // rce to create class component

    constructor(props) {   // rconst to create constructor
        super(props)

        this.state = {
            parentName: "Parent"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    // greetParent(){
    //     alert(`Hello ${this.state.parentName}`)
    // }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler= {this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
