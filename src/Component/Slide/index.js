import styles from './index.module.css'

export default function Slide({movie, onSelectMovie}){
    return(
        <div className={styles.item} onClick={()=>onSelectMovie(movie)}>
            <img src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path} alt={movie.title}/>
        </div>
    )
}