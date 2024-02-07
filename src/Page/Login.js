import Button from "../Component/Button";
import Input from "../Component/Input";
import { useState } from "react";
import styles from './Login.module.css'
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";

export default function Login({handleLogin, isLoadLogin, setIsLoadLogin}){

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate();

    const redirectLogin= async()=>{
        setIsLoadLogin(true)
        const msg = await handleLogin(user, password)
        if(msg === ""){
            navigate("/user")
        }else{
            setError(msg)
        }

        setIsLoadLogin(false)
    }

    return(
        <div className={styles.container}>    
            <div className={styles.form}>
                <h1>Login</h1>
                <Input id="username" title="Usuário" type="text" placeholder="Digite o seu usuário" onChange={(e)=>setUser(e.target.value)} value={user}/>
                <Input id="password" title="Senha" type="password" placeholder="Digite a sua senha" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <Button text="Entrar" onClick={redirectLogin} isLoad={isLoadLogin}/>
            </div>
            {error && <Alert style={{position:"absolute", top: 10, right: 10}} onClose={()=>setError("")} dismissible variant="danger">
                    {error}
            </Alert>}
        </div>
    )
}