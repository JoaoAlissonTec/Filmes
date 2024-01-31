import React from 'react';
import styles from './index.module.css'
import Average from '../Average';

function Card({movie, onSelectMovie}){

    return(
        <div className={styles.film_container} onClick={()=>onSelectMovie(movie)}>
            <div className={styles.main}>
                <div className={styles.image}>
                    <img src={"https://image.tmdb.org/t/p/w220_and_h330_face"+movie.poster_path} alt={movie.title}/>
                    <Average vote_average={movie.vote_average.toFixed(1)}/>
                </div>
                <h1>{movie.title}</h1>
            </div>
        </div>
    )
}

export default Card;