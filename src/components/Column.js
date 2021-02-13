import React from 'react'

function Column() { // if we will return div tag we will get warning message
    return (
        <React.Fragment>
            <td>Name</td>
            <td>Harshit Column component</td>
        </React.Fragment>
    )
}

export default Column
