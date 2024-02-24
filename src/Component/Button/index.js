import Spinner from 'react-bootstrap/esm/Spinner'
import styles from './index.module.css'

export default function Button(props){
    return <button className={`${styles.button} ${styles[props.dynamicClass]}`} type={props.type} onClick={props.onClick}>
        {!props.isLoad? props.children
        :<Spinner animation="border" role="status" size='sm'>
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        }
</button>
}