import React, { Component } from 'react'

class RefsComp extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()  // 1st approach
        this.cbRef = null   // 2nd approach
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        // this.inputRef.current.focus()

        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsComp
