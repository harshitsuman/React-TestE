import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
             name: 'Harshit'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDeriveedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log('LifecycleA ComponentDidMount')
    }

    shouldComponentUpdate(){
        console.log("LifecycleA ShouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "Rashmi"
        })
    }

    render() {
        console.log("LifecycleA render")
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
