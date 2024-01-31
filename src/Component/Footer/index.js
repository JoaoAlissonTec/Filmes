import styles from './index.module.css'
export default function Footer(props){
  return(
    <div className={styles.footer}>
        {props.children}
    </div>
  )
}