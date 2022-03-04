import React from 'react'

const Live = props => {
    return(
        <>
        {props.live.map(items => (
           
            <h1>{items.league.name}</h1>
        ))}
        </>
    )
}

export default Live