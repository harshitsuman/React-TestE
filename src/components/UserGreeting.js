import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
             isLoggedIn: true
        }
    }


    render() {
        return this.state.isLoggedIn && <div>Welcome Harshit suman</div>
    }
}

// return (
//     this.state.isLoggedIn ? <div>Welcome Harshit suman</div> : <div>Welcome Guest</div>
// )


// render() {
//     if(this.state.isLoggedIn){
//         return <div>Hello Harshit</div>
//     } else {
//         return <div>Welcome guest</div>
//     }
// }
export default UserGreeting
