import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import api from '../services/api'
import Content from "../Component/Content"
import styles from "./Filme.module.css"
import Backdrop from "../Component/Backdrop"

export default function Filme(){
    const location = useLocation()
    const [movie, setMovie] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    const movieId = location.state.movieId
    useEffect(()=>{
        api.get("/movie/"+movieId+"?language=pt-BR")
            .then((response)=>{
                setMovie(response.data)
                setIsLoad(false)
            })
            .catch((err)=>console.log(err))
    }, [movieId])

    return(
        <div className={styles.container}>
            {isLoad? <p>Carregando</p>:
            <><Backdrop alt={movie.title} backdrop_path={movie.backdrop_path}/><Content title={movie.title} overview={movie.overview} poster_path={movie.poster_path} backdrop_path={movie.backdrop_path} release_date={movie.release_date} /></>
            }
        </div>
    )
}