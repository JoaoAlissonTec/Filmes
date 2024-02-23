import Avatar from "../Component/Avatar";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import styles from './User.module.css'
import api from "../services/api";
import { useEffect, useState } from "react";
import Section from "../Component/Section";

export default function User({account, setAccount, sessionId, setSessionId}){

    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        if(account){
            api.get("/account/"+account.id+"/favorite/movies?language=pt-BR")
            .then((response)=>setFavorites(response.data.results))
            .catch()
        }
  
        //localStorage.setItem("account", JSON.stringify(account))
      }, [account]) 

    function handleExit(){
        const data = {"data":{"session_id":sessionId}}
        api.delete("/authentication/session", data)
        .then(()=>{
            navigate("/")
            localStorage.removeItem("account")
            localStorage.removeItem("session_id")
            setSessionId(null)
            setAccount(null)
        })
        .catch((err)=>console.log(err))        
    }
  
    function onSelectMovie(movie){
      const state = {movieId:movie.id, accountId:account.id}
      navigate("/filme/"+movie.title, {state})
    }

    return(
        <div className={styles.container}>
            <div className={styles.userCard}>
                <Avatar img={account && account.avatar.tmdb.avatar_path} dynamicClass="user"/>
                <div className={styles.about}>
                    <h1>Usuário</h1>
                    <p>{account && account.username}</p>
                    <Button text="Sair" onClick={handleExit} dynamicClass="secondary"/>
                </div>
            </div>
            <div className={styles.sections}>
                <Section filmes={favorites} title="Filmes favoritos" onSelectMovie={onSelectMovie}/>
            </div>
        </div>
    )
}