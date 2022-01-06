import React from 'react'
import './StandingList.css'

const StandingLists = props =>{
  
    return (
        <div>
           {props.data.map((item, index)=>(
                <div className='table' key={index} >
                    <h2>{item.league.name}</h2>
                    <img src={item.league.logo} alt="logo"  height="50" width="50"/>
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Team</th>
                            <th>Pl</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>+/-</th>
                            <th>GD</th>
                            <th>PTS</th>
                          </tr>
                    {item.league.standings[0].map((items) => (
                        <tr>
                            <td>{items.rank}</td>
                            <td><img src={items.team.logo} height="30" width="30" />  {items.team.name}</td>
                            <td> {items.all.played} </td>
                            <td> {items.all.win} </td>
                            <td> {items.all.draw} </td>
                            <td> {items.all.lose} </td>
                            <td> {items.all.goals.for} - {items.all.goals.against} </td>
                            <td> {items.goalsDiff} </td>
                            <td> {items.points} </td>
                          </tr>
                        ))}
                    </table>
                </div>
            ))}
        </div>
    )
}
export default StandingLists