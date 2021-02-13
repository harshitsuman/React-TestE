import React from 'react'

function Inline() {

    const heading = {
        fontSize: '72px',
        color: 'blue'
    }

    return (
        <div>
            <h1 className='error'>Error in Inline</h1>
            <h2 style={heading}>Inline</h2>
        </div>
    )
}

export default Inline
