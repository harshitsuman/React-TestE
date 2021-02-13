import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
             name: 'Harshit'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Harshit"
            })
        }, 2000);
    }

    render() {
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
