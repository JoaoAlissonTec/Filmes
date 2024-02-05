import './App.css';
import Navbar from './Component/Navbar';
import Filme from './Page/Filme';
import Home from './Page/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react';
import api from './services/api'
import axios from 'axios';
import Login from './Page/Login';
import User from './Page/User';

function App() {

    const [filmes, setFilmes] = useState([])
    const [topFilmes, setTopFilmes] = useState([])
    const [token, setToken] = useState("")
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem('account')) ?? null)
  
    useEffect(()=>{
      axios.all([
        api.get("/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc"),
        api.get("/movie/top_rated?language=pt-BR&page=1")
      ]).then(axios.spread((popularRes, topRes)=>{
        setFilmes(popularRes.data.results)
        setTopFilmes(topRes.data.results)
      })).catch((err)=>console.log(err))

      localStorage.setItem("account", JSON.stringify(account))
    }, [account])  

    const getToken = () =>{
      api.get("/authentication/token/new")
      .then((response)=>setToken(response.data.request_token))
      .catch((err)=>console.log(err))
    }

  function handleLogin(user, password){
      getToken()
      const loginJson = {"username":user, "password":password, "request_token":token}
      api.post("/authentication/token/validate_with_login", loginJson)
      .then()
      .catch((err)=>console.log(err))

      api.get("/account")
      .then((response)=>setAccount(response.data))
      .catch((err)=>console.log(err))
  }

  return (
    <Router>
      <div className='App'>
        <Navbar account={account}/>
        <Routes>
          <Route exact path='/' element={<Home filmes={filmes} topFilmes={topFilmes}/>}/>
          <Route path='/filme/:id' element={<Filme/>}/>
          <Route exact path='/login' element={<Login handleLogin={handleLogin}/>}/>
          <Route exact path='/user' element={<User account={account}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
