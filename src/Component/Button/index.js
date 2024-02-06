import styles from './index.module.css'

export default function Button({type, text, onClick, dynamicClass}){
    return <button className={`${styles.button} ${styles[dynamicClass]}`} type={type} onClick={onClick}>{text}</button>
}