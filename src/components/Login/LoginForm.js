import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Button } from "../forms/Button";
import { Input } from "../forms/Input";
import { UserContext } from "../../UserContext";
import { Error } from "../helpers/Error";
import styles from './LoginForm.module.css'
import stylesBtn from '../forms/Button.module.css'



const LoginForm = () =>{

    const username = useForm()
    const password = useForm()

    const { userLogin, error, loading } = React.useContext(UserContext)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(username.validate() && password.validate()){
            userLogin(username.value, password.value)
        }
        
    }

    return(
        <section className="animeLeft">
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input label="Usuário" type="text" name="username" {...username}/>
                <Input label="Senha" type="password" name="password" {...password}/>
                {loading ? (
                    <Button disabled >Carregando...</Button>
                )   : (
                    <Button>Entrar</Button>
                )}
                <Error error={error}/>
            </form>
            <Link to="/login/perdeu" className={styles.perdeu}>
                Perdeu a senha?
            </Link>

            <div className={styles.cadastro}>
                    <h2 className={styles.subtitle}>Cadastre-se</h2>
                    <p>Ainda não possui conta? Cadastre-se no site.</p>
                    <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
            </div>
        </section>
    )
}

export default LoginForm;