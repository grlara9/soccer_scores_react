import React, {useState, useEffect} from 'react'
import Soccer from './soccer/SoccerItem';
import StandingTable from './soccer/StandingTable';
import {Form , FloatingLabel} from 'react-bootstrap'
import './App.css';
import axios from 'axios'
import { sortData } from './utils/utils';

function App() {

  const [games, setGames] = useState([])
  let [leagueCode, setLeagueCode] = useState([
    {id: 262, name: 'Liga Mx'},
    {id: 71, name: 'Serie A'},
    {id:2, name:'UEFA Champions league'}
  ])
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  console.log("leaguecode>>>>>", leagueCode)
 
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
     console.log("code", sortedData)
     setGames(sortedData)
    } 
  getdata()
}, [])  

const handleSelection = (id, name) => {
  fetchData(id, name);
};

const fetchData = async (id, name)=>{


  const config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/standings?league=${id}&season=2021`,
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
      {leagueCode.map(league => (
          <button className="btn btn-primary mr-2 mt-2"  onClick={() => {handleSelection(league.id, league.name)}}>{league.name}</button>
                        ))}
    <Soccer />
    <StandingTable  isLoading={isLoading} data={data}/>
    </div>
  );
}

export default App;
