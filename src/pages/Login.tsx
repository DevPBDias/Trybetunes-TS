import { useState } from "react"
import Logo from "../components/Logo"
import { UserLogin, createUser } from "../services/userAPI"
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import MsgError from "../components/MsgError";

function Login() {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [msgError, setMsgError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
            navigate('/search')
        } catch (error: any) {
            setError(true)
            setMsgError('Nome de usuário inválido, por favor digite 3 ou mais caracteres')
        }
    }

    const handleClick = async () => {
        setLoading(true);
        await checkName()
        setLoading(false);
    }

    return (
        <>
            {
                loading ? (<Loading />) : (
                    <main
                        className="bg-green-700 md:flex min-h-screen flex-col items-center justify-items-center">
                        <Logo />
                        <form
                            className="md:flex flex-col items-center justify-items-center bg-white p-16 rounded-xl shadow">
                            <label
                                className="font-mono text-center text-2xl p-2 mb-4"
                                htmlFor="name">Bem vindo ao Trybetunes!</label>
                            <input
                                className="font-mono text-left text-sm p-2 mb-4 bg-gray-200 rounded-lg"
                                id="name"
                                value={name}
                                type="text"
                                placeholder="Digite seu nome"
                                onChange={({ target }) => setName(target.value)}
                            />
                            <button
                                type="button"
                                className="font-mono text-center text-sm mb-4 px-8 py-2 bg-green-500  rounded-full "
                                onClick={handleClick}
                            >
                                Entrar
                            </button>
                            {
                                error && (
                                    <MsgError message={msgError} />
                                )
                            }
                        </form>
                    </main>
                )
            }
        </>
    )
}

export default Login