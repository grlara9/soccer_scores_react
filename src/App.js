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
    {id: 262, name: 'Liga Mx'},
    {id:2, name:'UEFA Champions league'},
    {id:31, name:'World Cup - Qualification CONCACAF'},
    {id:39, name:'Premier League'},
    {id:61, name:'Ligue 1'},
    {id:71, name:'Serie A'},
    {id:78, name:'Bundesliga 1'},
    {id:94, name:'Primeira Liga'},
    {id:140, name:'La Liga'}
  ])
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

 // console.log("leaguecode>>>>>", leagueCode)
 
  //4c092769ed4424412311fbff39a27aa8	
  /*
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



useEffect(()=>{
  handleSelection(262)
},[])

*/
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
          <button className="btn btn-primary mr-2 mt-2"  onClick={() => handleSelection(league.id, league.name)}>{league.name}</button>
                        ))}
    <StandingLists  
     data={data}
    />
    </div>
  );
}

export default App;
