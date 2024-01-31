import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import api from '../services/api'
import Content from "../Component/Content"
import styles from "./Filme.module.css"
import Backdrop from "../Component/Backdrop"
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

export default function Filme(){
    const location = useLocation()
    const [movie, setMovie] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    const [casts, setCasts] = useState([])

    const movieId = location.state.movieId
    
    useEffect(()=>{
        axios.all([
            api.get("/movie/"+movieId+"?language=pt-BR"),
            api.get("https://api.themoviedb.org/3/movie/"+movieId+"/credits?language=pt-BR")
        ]).then(axios.spread((movieRes, castRes)=>{
            console.log(castRes.data.cast)
            setMovie(movieRes.data)
            setCasts(castRes.data.cast)
            setIsLoad(false)
        }))  
    }, [movieId])

    return(
        <div className={styles.container}>
            {isLoad? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>:
                <>
                    <Backdrop alt={movie.title} backdrop_path={movie.backdrop_path}/>
                    <Content casts={casts} title={movie.title} overview={movie.overview} poster_path={movie.poster_path} backdrop_path={movie.backdrop_path} release_date={movie.release_date} />
                </>
            }
        </div>
    )
}