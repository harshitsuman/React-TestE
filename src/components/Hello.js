import React from 'react'

const Hello = ()=> {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Jsx</h1>
    //     </div>
    // )

    return React.createElement('div', {className: 'dummyClass'}, <h1>Hello JSx</h1>)
}

export default Hello