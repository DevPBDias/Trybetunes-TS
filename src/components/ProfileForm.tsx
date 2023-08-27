import { useState } from "react"
import Logo from "./Logo"
import { updateUser } from "../services/userAPI"
import { useNavigate } from "react-router-dom"

const columns = 30
const rows = 10
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

function ProfileForm({ data }: any) {
    const navigate = useNavigate()
    const [btnDisable, setBtnDisable] = useState(true)
    const [newUser, setNewUser]: any = useState({
        name: data.name,
        email: data.email,
        image: data.image,
        description: data.description,
    })

    const validateEmail = (userEmail: string) => {
        const isValidEmail = emailRegex.test(userEmail);
        !isValidEmail ? alert('Email incorreto') : ''
    }

    const validateFields = (key: string) => {
        newUser[key] === '' ? setBtnDisable(true) : setBtnDisable(false)
    }

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setNewUser({
            ...newUser,
            [name]: value,
        });
        validateFields(name)
    }

    const handleCLick = async () => {
        validateEmail(newUser.email)
        setBtnDisable(false)
        await updateUser(newUser)
        navigate('/profile')
    }

    return (
        <main>
            <div>
                <Logo />
                <input type="file" name="image" />
            </div>
            <div>
                <div>
                    <label htmlFor="name">Nome</label>
                    <p id="name">Fique a vontade para usar seu nome social</p>
                    <input
                        id="name"
                        name="name"
                        value={newUser.name}
                        type="text"
                        onChange={handleChange}
                        placeholder="Seu nome"
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <p id="email">Escolha um e-mail que consulte diariamente</p>
                    <input
                        id="email"
                        name="email"
                        value={newUser.email}
                        type="text"
                        onChange={handleChange}
                        placeholder="user@user.com"
                    />
                </div>
                <div>
                    <label htmlFor="aboutMe">Descrição</label>
                    <textarea
                        value={newUser.description}
                        name="description"
                        id="aboutMe"
                        cols={columns}
                        rows={rows}
                        onChange={handleChange}
                        placeholder=" Sobre mim"
                    />
                </div>
                <button
                    type="button"
                    disabled={btnDisable}
                    onClick={handleCLick}
                >
                    Salvar
                </button>
            </div>
        </main>
    )
}

export default ProfileForm