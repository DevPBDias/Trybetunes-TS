import { useState } from "react"
import Logo from "../components/Logo"
import { UserLogin, createUser } from "../services/userAPI"

function Login() {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [msgError, setMsgError] = useState('');

    const checkName = async () => {
        try {
            const userData: UserLogin = {
                name,
                email: '',
                image: '',
                description: '',

            }
            if (!name || name.length < 3) {
                throw new Error('Nome de usuário inválido, por favor digite 3 ou mais caracteres')
            }
            await createUser(userData)
            setError(false)
        } catch (error: any) {
            setError(true)
            setMsgError('Nome de usuário inválido, por favor digite 3 ou mais caracteres')
        }
    }

    const handleClick = async () => {
        await checkName()
    }

    return (
        <>
            <Logo />
            <form className="formContainer">
                <label htmlFor="name">Bem vindo ao Trybetunes!</label>
                <input
                    className="formContainer"
                    id="name"
                    value={name}
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={({ target }) => setName(target.value)}
                />
                <button
                    type="button"
                    className="formContainer"
                    onClick={handleClick}
                >
                    Entrar
                </button>
            </form>
            {
                error && (
                    <p>{msgError}</p>
                )
            }
        </>
    )
}

export default Login