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
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem('account')) ?? null)
    const [sessionId, setSessionId] = useState()
    const [error, setError] = useState()

    useEffect(()=>{
      axios.all([
        api.get("/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc"),
        api.get("/movie/top_rated?language=pt-BR&page=1")
      ]).then(axios.spread((popularRes, topRes)=>{
        setFilmes(popularRes.data.results)
        setTopFilmes(topRes.data.results)
      })).catch((err)=>console.log(err))

      //localStorage.setItem("account", JSON.stringify(account))
    }, [account])  

    const handleLogin = async(user, password)=>{

      let t = ""
      let session_id = ""
      let error = ""
      
      await api.get("/authentication/token/new")
      .then((response)=>t = response.data.request_token)
      .catch((err)=>console.log(err))

      await api.post("/authentication/token/validate_with_login", {"username":user, "password":password, "request_token":t})
      .then((response)=>t = response.data.request_token)
      .catch((err)=>{
        error = JSON.parse(err.request.response).status_message
        setError(JSON.parse(err.request.response).status_message)
      })
      if(error === ""){
        await api.post("/authentication/session/new", {"request_token":t})
        .then((response)=>{
          session_id = response.data.session_id
          setSessionId(session_id)
        })
        .catch((err)=>console.log(err))

        api.get("/account?session_id="+session_id)
        .then((response)=>{
            setAccount(response.data)
        })
        .catch((err)=>console.log(err))
      }
  }

  return (
    <Router>
      <div className='App'>
        <Navbar account={account}/>
        <Routes>
          <Route exact path='/' element={<Home filmes={filmes} topFilmes={topFilmes}/>}/>
          <Route path='/filme/:id' element={<Filme/>}/>
          <Route exact path='/login' element={<Login handleLogin={handleLogin} error={error}/>}/>
          <Route exact path='/user' element={<User account={account} setAccount={setAccount} sessionId={sessionId}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
