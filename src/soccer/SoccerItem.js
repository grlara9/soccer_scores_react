import React from 'react'

const Soccer = () =>{
    return(
        <div className="soocer">
            <div className="soccer__title-box">
                <p>Local</p>
                <p>45</p>
                <p>Visitor</p>
            </div>

            <div className="soccer__title-box">
                <div className="team">
                    <img className="homelogo" />
                    <p>Team name</p>
                </div>
                <p className="goals"> 2 - 1 </p>
                <div className="team">
                    <img className="awaylogo" />
                    <p>Team name</p>
                </div>
            </div>
        </div>
    )
}

export default Soccer