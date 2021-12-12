import React from 'react'

const Standings = ({data, isLoading}) =>{
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {data.map((standing)=>(
               
                <StandingTable 
                
                key={standing.league.id} 
                standing={standing.response} />
            ))}
        </div>
    )
}
export default Standings