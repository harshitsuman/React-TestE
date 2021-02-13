import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
             name: 'Harshit'
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDeriveedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log('LifecycleB ComponentDidMount')
    }

    shouldComponentUpdate(){
        console.log("LifecycleB ShouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate")
    }


    render() {
        console.log("LifecycleB render")
        return <div>Hell0</div>
    }
}

export default LifecycleB
