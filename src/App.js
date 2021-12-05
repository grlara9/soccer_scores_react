import React, {useState, useEffect} from 'react'
import Soccer from './soccer/SoccerItem';
import {Form , FloatingLabel} from 'react-bootstrap'
import './App.css';
import axios from 'axios'

function App() {

  const [games, setGames] = useState([])
  console.log("This is game >>>", games)

useEffect(() => {
  const getdata = async() =>{
    const {data} = await axios({
       method: 'get',
       url: 'https://api.football-data.org/v2/competitions',
       headers: {
        'X-Auth-Token': '7092f96c5dd94b4195e4ba77b0bbf7da'
        }
     })
    console.log("The data>>>>", data)
     const d = data.competitions;
      const leagues = d.map((league)=> ({
       name: league.name,
       value:league.code
     }))
     setGames(leagues)
    } 
    
    getdata()
  }, [])  

  

  
  return (
    <div className="App">
      <FloatingLabel controlId="floatingSelect" label="Works with selects">
        <Form.Select aria-label="Floating label select example">
          {games.map((leagues)=>(
            <option value={leagues.value}>{leagues.name}</option>

          ))}
          
        </Form.Select>
      </FloatingLabel>
    <Soccer games={games}/>
    </div>
  );
}

export default App;
