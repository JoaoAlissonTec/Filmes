import { NavLink } from "react-router-dom";
import styles from './index.module.css'

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul className={styles.nav_itens}>
                <li className={styles.item}><NavLink to="/" style={({isActive})=>isActive?{color: "#D44D5C"}:undefined}>Home</NavLink></li>
                <li className={styles.item}><NavLink to="*" style={({isActive})=>isActive?{color: "#D44D5C"}:undefined}>Filmes</NavLink></li>
            </ul>
        </div>
    )
}