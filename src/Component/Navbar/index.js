import { NavLink } from "react-router-dom";
import styles from './index.module.css'
import Avatar from "../Avatar";

export default function Navbar({account}){
    return(
        <div className={styles.navbar}>
            <ul className={styles.nav_itens}>
                <li className={styles.item}><NavLink to="/" style={({isActive})=>isActive?{color: "#D44D5C"}:undefined}>Home</NavLink></li>
                <li className={styles.item}><NavLink to="*" style={({isActive})=>isActive?{color: "#D44D5C"}:undefined}>Filmes</NavLink></li>
                {account === null ? <li className={styles.item}>
                    <NavLink to="/login" style={({isActive})=>isActive?{color: "#D44D5C"}:undefined}>Entrar</NavLink>
                </li> : <li className={styles.item}>
                    <NavLink to="/user" style={({isActive})=>isActive?{color: "#D44D5C"}:undefined}>
                        <Avatar img={account && account.avatar.tmdb.avatar_path} dynamicClass="navUser"/>
                    </NavLink>
                </li>}
                
            </ul>
        </div>
    )
}