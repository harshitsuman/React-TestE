import React from 'react'

const withCounter = WrapperComponent => {

    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                 count: 0
            }
        }

        clickIncrement = () => {
            this.setState( prevCount => {
                return { count: prevCount.count + 1 }
            })
        }

        render() {
            return <WrapperComponent name ='Harshit' count={this.state.count} clickIncrement = {this.clickIncrement} {...this.props} />
        }
    }
    return WithCounter
}

export default withCounter
