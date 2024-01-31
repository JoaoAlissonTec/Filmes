import Avatar from '../Avatar'
import styles from './index.module.css'

export default function Content({title, overview, poster_path, release_date, backdrop_path, casts}){

    const data = new Date(release_date)

    console.log(backdrop_path)

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