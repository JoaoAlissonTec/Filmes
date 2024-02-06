import styles from './index.module.css'
export default function Input({title, type, placeholder, id, onChange, value}){
    return(
        <div className={styles.input}>
            <input id={id} name={id} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
            <label htmlFor={id}>{title}</label>
        </div>
    )
}