import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import api from '../services/api'
import Content from "../Component/Content"
import styles from "./Filme.module.css"
import Backdrop from "../Component/Backdrop"
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

export default function Filme({sessionId}){
    const location = useLocation()
    const [movie, setMovie] = useState([])
    const [favorite, setFavorite] = useState(false)
    const [isLoad, setIsLoad] = useState(true)
    const [casts, setCasts] = useState([])

    const movieId = location.state.movieId
    const accountId = location.state.accountId
    
    useEffect(()=>{
        if(sessionId !== undefined){
            axios.all([
                api.get("/movie/"+movieId+"?language=pt-BR"),
                api.get("https://api.themoviedb.org/3/movie/"+movieId+"/credits?language=pt-BR"),
                api.get("/movie/"+movieId+"/account_states?session_id="+sessionId)
            ]).then(axios.spread((movieRes, castRes, stateRes)=>{
                console.log(castRes.data.cast)
                setMovie(movieRes.data)
                setCasts(castRes.data.cast)
                setFavorite(stateRes.data.favorite)
                setIsLoad(false)
            })).catch((err)=>console.log(err))  
        }else{
            axios.all([
                api.get("/movie/"+movieId+"?language=pt-BR"),
                api.get("https://api.themoviedb.org/3/movie/"+movieId+"/credits?language=pt-BR")
            ]).then(axios.spread((movieRes, castRes)=>{
                console.log(castRes.data.cast)
                setMovie(movieRes.data)
                setCasts(castRes.data.cast)
                setIsLoad(false)
            })).catch((err)=>console.log(err))  
        }
    }, [movieId, sessionId])

    
    function handleFavorite(){
        if(accountId !== null){
            const body = {"media_type":"movie", "media_id":movieId, "favorite":!favorite}

            api.post("/account/"+accountId+"/favorite", body)
            .then(()=>setFavorite(!favorite))
            .catch((err)=>console.log(err))
        }
    }

    return(
        <div className={styles.container}>
            {isLoad? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>:
                <>
                    <Backdrop alt={movie.title} backdrop_path={movie.backdrop_path}/>
                    <Content casts={casts} favorite={favorite} title={movie.title} overview={movie.overview} poster_path={movie.poster_path} release_date={movie.release_date} handleFavorite={handleFavorite}/>
                </>
            }
        </div>
    )
}