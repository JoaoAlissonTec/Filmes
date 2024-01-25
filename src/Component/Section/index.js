import Card from "../Card";
import styles from './index.module.css'

export default function Section({title, filmes, onSelectMovie}){
    return(
        <div className={styles.container}>
            <h1>{title}</h1>
            <div className={styles.section_container}>
                {filmes.map((value)=>(
                    <Card key={value.id} movie={value} onSelectMovie={onSelectMovie}/>
                ))}
            </div>
        </div>
    )
}