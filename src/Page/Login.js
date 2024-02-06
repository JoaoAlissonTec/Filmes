import Button from "../Component/Button";
import Input from "../Component/Input";
import { useState } from "react";
import styles from './Login.module.css'
import Alert from 'react-bootstrap/Alert';

export default function Login({handleLogin, error}){

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className={styles.container}>    
            <div className={styles.form}>
                <h1>Login</h1>
                <Input id="username" title="Usuário" type="text" placeholder="Digite o seu usuário" onChange={(e)=>setUser(e.target.value)} value={user}/>
                <Input id="password" title="Senha" type="password" placeholder="Digite a sua senha" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <Button text="Entrar" onClick={()=>handleLogin(user, password)}/>
                
            </div>
            {error && <Alert style={{position:"absolute", top: 0, right: 0}} variant="danger">
                    {error}
            </Alert>}
        </div>
    )
}