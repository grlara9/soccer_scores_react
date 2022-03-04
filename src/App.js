import React, {useState, useEffect} from 'react'
import Soccer from './components/SoccerItem';
import LiveScores from './components/LiveScores'
import StandingLists from './components/StadingList';
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
  const [live, setLive]= useState([])
  const [isLoading, setIsLoading] = useState(true)

  console.log("This is live", live)
 const handleSelection = (id, name) => {
  searchData(id, name);
};



const fetchData = async ()=>{
    const config = {
      method: 'get',
      url: "https://v3.football.api-sports.io/standings?league=262&season=2021&from=2021-07-01&to=2021-12-31",
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

  const liveData = async() => {
    const config = {
      method: 'get',
      url:'https://v3.football.api-sports.io/fixtures?live=all',
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "4c092769ed4424412311fbff39a27aa8",
      }
    }
    const {data} = await axios(config)

    if (!{data} || {data}.length === 0) {

      console.log('Something went wrong');
      return
    }
    setLive(data.response)
  }
 

  useEffect(()=>{
    liveData()
  },[])


  
  return (
    <div className="App">
      <h1>Soccer Mania</h1>
      {leagueCode.map(league => (
          <button onClick={() => handleSelection(league.id, league.name)}><img src={league.logo} alt="logo" height={50} width={50} /></button>
                        ))}
    <StandingLists  
     data={data}
    
    />

    <LiveScores live={live}/>
    </div>
  );
}

export default App;
