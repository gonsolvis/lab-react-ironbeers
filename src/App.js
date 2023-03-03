import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import axios from "axios"
import { useState, useEffect } from "react";

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        setPosts(response.data)

      }

      )
      .catch(err => console.log("help me"))
  }, [])


  return (
    <div className="App">
     <Routes>
      <Route path="/"  element={<HomePage beers={posts}/>} />
        <Route path="/beers"  element={<Beers beers={posts}/>} />
        <Route path="/new-beers" element={<NewBeer beers={posts}/>} />
        <Route path="/random-beer"element={<RandomBeer beers={posts}/>} />
      </Routes>









    </div>
  );
}

export default App;
