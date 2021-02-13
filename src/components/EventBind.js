import React, { Component } from 'react' // rce to create class component

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

        this.clickHandler = this.clickHandler.bind(this)  // 3 best approach
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Good bye!"
    //     })
    // }

    clickHandler = () => {     // 4 best approach
        this.setState({
            message: "new clickHandler"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
            {/*    <button onClick={this.clickHandler.bind(this)}>Clicked Event</button> */}
            {/*    <button onClick={() => this.clickHandler()}>Clicked Event</button>    */}
                <button onClick={this.clickHandler}>Clicked Event</button>
            </div>
        )
    }
}

export default EventBind
