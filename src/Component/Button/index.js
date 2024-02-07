import Spinner from 'react-bootstrap/esm/Spinner'
import styles from './index.module.css'

export default function Button({type, text, onClick, dynamicClass, isLoad}){
    return <button className={`${styles.button} ${styles[dynamicClass]}`} type={type} onClick={onClick}>
        {!isLoad?text
        :<Spinner animation="border" role="status" size='sm'>
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        }
</button>
}