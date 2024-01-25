import styles from './index.module.css'

export default function Details({selectedMovie}){
    return(
        <div id="about" className={styles.details_container}>
            <div className={styles.backdrop}>
                <img src={"https://image.tmdb.org/t/p/original"+selectedMovie.backdrop_path} alt={selectedMovie.title}/>
            </div>
            <div className={styles.text}>
                <h1>{selectedMovie.title}</h1>
                <p>{selectedMovie.overview}</p>
            </div>
        </div>
    )
}