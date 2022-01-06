import React, {useState, useEffect} from 'react'
import Soccer from './soccer/SoccerItem';
import StandingLists from './soccer/StadingList';
import {Form , FloatingLabel} from 'react-bootstrap'
import './App.css';
import axios from 'axios'
import { sortData } from './utils/utils';

function App() {

  const [games, setGames] = useState([])
  let [leagueCode, setLeagueCode] = useState([
    {id: 262, name: 'Liga Mx', logo: "https://media.api-sports.io/football/leagues/262.png"},
    {id:2, name:'UEFA Champions league', logo: "https://media.api-sports.io/football/leagues/2.png"},
    {id:31, name:'World Cup - Qualification CONCACAF', logo: "https://media.api-sports.io/football/leagues/31.png"},
    {id:39, name:'Premier League', logo: "https://media.api-sports.io/football/leagues/39.png"},
    {id:61, name:'Ligue 1', logo: "https://media.api-sports.io/football/leagues/61.png"},
    {id:71, name:'Serie A', logo: "https://media.api-sports.io/football/leagues/71.png"},
    {id:78, name:'Bundesliga 1', logo: "https://media.api-sports.io/football/leagues/78.png"},
    {id:94, name:'Primeira Liga', logo: "https://media.api-sports.io/football/leagues/94.png"},
    {id:140, name:'La Liga', logo: "https://media.api-sports.io/football/leagues/140.png"}
  ])
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

 const handleSelection = (id, name) => {
  searchData(id, name);
};



const fetchData = async ()=>{
    const config = {
      method: 'get',
      url: "https://v3.football.api-sports.io/standings?league=262&season=2021",
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "4c092769ed4424412311fbff39a27aa8",
      }
    }
      setIsLoading(true)
      const {data} = await axios(config)
      setData(data.response)
      setIsLoading(false)
    }

  useEffect(()=>{
    fetchData()
  },[])

  console.log("all data passed", data)

  const searchData = async (id, name)=>{
    const config = {
      method: 'get',
      url: `https://v3.football.api-sports.io/standings?league=${id}&season=2021`,
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "4c092769ed4424412311fbff39a27aa8",
      }
    }
    setIsLoading(true)
    const {data} = await axios(config)
    setData(data.response)
    setIsLoading(false)

  }
  
  return (
    <div className="App">
      <h1>Soccer Mania</h1>
      {leagueCode.map(league => (
          <button onClick={() => handleSelection(league.id, league.name)}><img src={league.logo} alt="logo" height={50} width={50} /></button>
                        ))}
    <StandingLists  
     data={data}
    />
    </div>
  );
}

export default App;
