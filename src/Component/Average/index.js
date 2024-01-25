import styles from './index.module.css'
import {MdStar} from 'react-icons/md'

export default function Average({vote_average}){
    return(
        <div className={styles.average}>
            <MdStar/>
            <p>{vote_average}</p>
        </div>
    )
}