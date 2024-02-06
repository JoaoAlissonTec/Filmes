import Avatar from "../Component/Avatar";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import styles from './User.module.css'
import api from "../services/api";

export default function User({account, setAccount, sessionId}){

    const navigate = useNavigate();
    function handleExit(){
        navigate("/")
        const data = {"data":{"session_id":sessionId}}
        api.delete("/authentication/session", data)
        .then()
        .catch((err)=>console.log(err))
        setAccount(null)
        localStorage.removeItem("account")
    }

    return(
        <div className={styles.container}>
            <div className={styles.userCard}>
                <Avatar img={account.avatar.tmdb.avatar_path} dynamicClass="user"/>
                <div className={styles.about}>
                    <h1>Usuário</h1>
                    <p>{account.username}</p>
                    <Button text="Sair" onClick={handleExit} dynamicClass="secondary"/>
                </div>
            </div>
        </div>
    )
}