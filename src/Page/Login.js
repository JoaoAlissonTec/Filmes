import Button from "../Component/Button";
import Input from "../Component/Input";
import { useState } from "react";
import styles from './Login.module.css'

export default function Login({handleLogin}){

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className={styles.container}>    
            <div className={styles.form}>
                <h1>Login</h1>
                <Input id="username" title="Usuário" type="text" placeholder="Digite o seu usuário" onChange={(e)=>setUser(e.target.value)} value={user}/>
                <Input id="password" title="Senha" type="password" placeholder="Digite a sua senha" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <Button type="submit" text="Entrar" onClick={()=>handleLogin(user, password)}/>
            </div>
        </div>
    )
}