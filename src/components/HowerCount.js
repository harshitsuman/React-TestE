import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HowerCount extends Component {



    render() {
        const { count, clickIncrement } = this.props
        return (
            <div>
                <h2 onMouseOver={clickIncrement}>{this.props.name} Howered {count} times</h2>
            </div>
        )
    }
}

export default WithCounter(HowerCount)







// import React, { Component } from 'react'
// import WithCounter from './WithCounter'

// class HowerCount extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//              count: 0
//         }
//     }

//     clickIncrement = () => {
//         this.setState( prevCount => {
//             return { count: prevCount.count + 1 }
//         })
//     }

//     render() {
//         const { count } = this.state
//         return (
//             <div>
//                 <h2 onMouseOver={this.clickIncrement}>{this.props.name} Howered {count} times</h2>
//             </div>
//         )
//     }
// }

// export default WithCounter(HowerCount)
