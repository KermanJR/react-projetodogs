import React from "react";
import { Input } from "../forms/Input";
import { Button } from "../forms/Button";
import { useForm } from "../../hooks/useForm";
import { USER_POST } from "../../api/Api";
import { UserContext } from "../../UserContext";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../helpers/Error";


const LoginCreate = () =>{

    const username = useForm()
    const email = useForm('email')
    const password = useForm()

    const { userLogin } = React.useContext(UserContext)
    const {loading, error, request} = useFetch()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value
        })
        const { response } = await request(url, options)
        if(response.ok){
            userLogin(username.value, password.value)
        }
        
    }
    return(
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username}/>
                <Input label="Email" type="email" name="email" {...email}/>
                <Input label="Password" type="password" name="password" {...password}/>
                {loading ? 
                    <Button>Cadastrando...</Button>
                    :
                    <Button>Cadastrar</Button>
                }

                <Error error={error}/>
                
            </form>
        </section>
    )
}

export default LoginCreate;