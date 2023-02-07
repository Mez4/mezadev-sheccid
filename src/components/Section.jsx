import React from 'react'

const Section = (props) => {
    return (
        <div className='main-section' style={props.styles}>
            {props.children}
        </div>
    )
}

export default Section