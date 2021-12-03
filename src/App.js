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
       url: 'https://api.football-data.org/v2/matches'
       ,
       headers: {
        'X-Auth-Token': '7092f96c5dd94b4195e4ba77b0bbf7da'
        }
     })
     
     setGames(data)
    } 
    getdata()
  }, [])  

  

  
  return (
    <div className="App">
      <Soccer games={games}/>
    </div>
  );
}

export default App;
