import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler() {
        console.log("Button clicked in class component")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Clicked.</button>
            </div>
        )
    }
}

export default ClassClick
