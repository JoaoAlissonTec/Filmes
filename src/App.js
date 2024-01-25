import './App.css';
import Navbar from './Component/Navbar';
import Filme from './Page/Filme';
import Home from './Page/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react';
import api from './services/api'

function App() {

    const [filmes, setFilmes] = useState([])
  
    useEffect(()=>{
      api.get("/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc")
      .then((response)=>setFilmes(response.data.results))
      .catch((err)=>console.log(err))
    }, [])  

  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home filmes={filmes}/>}/>
          <Route path='/filme/:id' element={<Filme/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
