import Avatar from '../Avatar'
import styles from './index.module.css'
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'

export default function Content({title, overview, poster_path, release_date, casts, favorite, handleFavorite}){

    const data = new Date(release_date)

    return(
        <div className={styles.content}>
            <div className={styles.effect}>
                <div className={styles.poster}>
                    {poster_path && <img alt={title} src={"https://image.tmdb.org/t/p/original"+poster_path}/>}
                </div>
                <div className={styles.text}>
                    <h1>{title}</h1>
                    <span>{data.toLocaleDateString()}</span>
                    <p>{overview}</p>
                    <div className={styles.options}>
                        {favorite ? <MdFavorite onClick={handleFavorite} color='#D44D5C'/>:<MdFavoriteBorder onClick={handleFavorite}/>}
                    </div>
                </div>
            </div>
            <div className={styles.castsContainer}>
                <h1>Elenco</h1>
                <div className={styles.casts}>
                    {casts.slice(0, 6).map((cast)=><Avatar name={cast.name} img={cast.profile_path} key={cast.id}/>)}
                </div>
            </div>
        </div>
    )
}