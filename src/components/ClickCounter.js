import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends Component {

    render() {
        const {count, clickIncrement } = this.props
        return <button onClick={clickIncrement}>{this.props.name} Hero {this.props.hero} Clicked {count} times</button>
    }
}

export default WithCounter(ClickCounter)
