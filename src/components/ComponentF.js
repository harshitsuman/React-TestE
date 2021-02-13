import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    username => {
                        return <div>This is ComponentF and {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
