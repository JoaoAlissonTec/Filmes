import styles from './index.module.css'

export default function Content({title, overview, poster_path, release_date, backdrop_path}){

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
        </div>
    )
}