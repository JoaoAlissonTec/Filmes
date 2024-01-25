import styles from './index.module.css'

export default function Backdrop({alt, backdrop_path}){
    return(
        <div className={styles.backdrop}>
            <div className={styles.image}>
                {backdrop_path && <img alt={alt} src={"https://image.tmdb.org/t/p/original"+backdrop_path}/>}
            </div>
        </div>
    )
}