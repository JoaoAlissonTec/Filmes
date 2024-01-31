import styles from './index.module.css'

export default function Avatar({name, img}){
  return(
    <div className={styles.info}>
        <div className={styles.avatar}>
            {img && <img src={"https://image.tmdb.org/t/p/w100_and_h100_face"+img} alt={name}/>}
        </div>
    </div>
  )
}