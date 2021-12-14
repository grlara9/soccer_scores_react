import React from 'react'
import {Table} from 'react-bootstrap'

const StandingTable = ({data}) =>{
  console.log("si sirve",data)
    return(
        <div className="table">
        
        
        <p>{data.league.country}</p>
        <Table striped bordered hover variant="dark">
          <thead>
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
          </thead>
        {data.league.standings[1].map((items)=>(
         
          <tbody>
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
           
          </tbody>
    ))}
    </Table>
                   
            
        </div>
    )
}

export default StandingTable