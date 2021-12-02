import React, {useState, useEffect} from 'react'
import Soccer from './soccer/SoccerItem';
import './App.css';
import axios from 'axios'

function App() {

  const [games, setGames] = useState([])
  console.log("This is game >>>", games)

useEffect(() => {
  const getdata = async() =>{
    const {data} = await axios({
     
       method: 'get',
       url: 'https://v3.football.api-sports.io/fixtures?live=all',
       headers: {
         'x-rapidapi-host': 'v3.football.api-sports.io',
         'x-rapidapi-key': '4c092769ed4424412311fbff39a27aa8',
         
     }
     })
     
     setGames(data)
    } 
    getdata()
  }, [])  

  

  
  return (
    <div className="App">
      <Soccer />
    </div>
  );
}

export default App;
