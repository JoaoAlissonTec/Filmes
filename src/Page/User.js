import Avatar from "../Component/Avatar";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import styles from './User.module.css'

export default function User({account}){

    const navigate = useNavigate();
    function handleExit(){
        navigate("/")
        localStorage.removeItem("account")
    }

    return(
        <div className={styles.container}>
            <div className={styles.userCard}>
                <Avatar img={account.avatar.tmdb.avatar_path} dynamicClass="user"/>
                <div className={styles.about}>
                    <h1>{account.username}</h1>
                    <Button text="Sair" onClick={handleExit}/>
                </div>
            </div>
        </div>
    )
}