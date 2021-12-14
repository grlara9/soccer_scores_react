import React from 'react'
import StandingTable from './StandingTable'

const Standings = ({data, isLoading}) =>{
    
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {
                <StandingTable 
                    key={league.id} 
                    data={data} 
                 />
            }
        </div>
    )
}
export default Standings