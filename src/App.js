import React, {useState, useEffect} from 'react'
import Soccer from './soccer/SoccerItem';
import StandingTable from './soccer/StandingTable';
import {Form , FloatingLabel} from 'react-bootstrap'
import './App.css';
import axios from 'axios'
import { sortData } from './utils/utils';

function App() {

  const [games, setGames] = useState([])
  const [leagueCode, setLeagueCode] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

// url: 'https://api.football-data.org/v2/competitions',
//headers: {
  //'X-Auth-Token': '7092f96c5dd94b4195e4ba77b0bbf7da'
  //}


  //4c092769ed4424412311fbff39a27aa8	
useEffect(() => {
  const getdata = async() =>{


   const config = {
     method: 'get',
     url:'https://v3.football.api-sports.io/leagues',
     headers:{
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "4c092769ed4424412311fbff39a27aa8"
     }
   }

   const {data} = await axios(config)
    
      const d = data.response;
      const leagues = d.map((league)=> ({
        name: league.league.name,
        value:league.league.id,
        logo: league.league.logo
     }))
     let sortedData = sortData(leagues)
     setGames(sortedData)
    } 
  getdata()
}, [])  

  const onLegueChange = async (event)=>{

    const leagueCode = event.target.value;

    setLeagueCode(leagueCode)
    console.log("LUEGUECODE>>>", leagueCode)

    const config = {
      method: 'get',
      url:`https://v3.football.api-sports.io/standings?league=${leagueCode}&season=2021`,
      headers:{
       "x-rapidapi-host": "v3.football.api-sports.io",
       "x-rapidapi-key": "4c092769ed4424412311fbff39a27aa8"
      }
    }
    setIsLoading(true)
    const {data} = await axios(config)
    const standing = data.response[0];
    setData(standing)
    console.log("all data passed", standing)
    setIsLoading(false)
  }

  
  return (
    <div className="App">
      <h1>Soccer Mania</h1>
      <FloatingLabel controlId="floatingSelect">
        <Form.Select aria-label="Floating label select example" onChange={onLegueChange}>
          {games.map((leagues)=>(
            <option value={leagues.value}> {leagues.name}</option>
          ))}
        </Form.Select>
      </FloatingLabel>
    <Soccer />
    <StandingTable  isLoading={isLoading} data={data}/>
    </div>
  );
}

export default App;
