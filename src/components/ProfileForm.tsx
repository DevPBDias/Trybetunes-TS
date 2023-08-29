import { useState } from "react"
import userIcon from "../assets/userIcon.png"
import { updateUser } from "../services/userAPI"
import { useNavigate } from "react-router-dom"
import UserImage from "./UserImage"

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
        isValidEmail ? setBtnDisable(true) : setBtnDisable(false)
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
        if (!btnDisable) {
            navigate('/profile')
        }
    }

    return (
        <main
            className="flex flex-col justify-items-center items-center font-mono"
        >
            <section
                className="bg-slate-400 m-10 rounded-xl shadow-xl text-gray-950 flex flex-col flex-nowrap justify-items-center items-center"
            >
                <div
                    className="flex flex-col flex-nowrap p-6 justify-items-center items-center"
                >
                    <UserImage image={userIcon} nameImg="userIcon" />
                    <input
                        type="file" name="image" />
                </div>
                <div
                    className="flex flex-col flex-nowrap justify-items-center items-center"
                >
                    <div
                        className="flex flex-col flex-nowrap p-2 justify-items-center items-center"
                    >
                        <label
                            className="font-bold text-left w-full"
                            htmlFor="name">Nome:</label>
                        <p
                            className="italic ml-4 text-left w-full"
                            id="name">Fique a vontade para usar seu nome social</p>
                        <input
                            className="rounded-xl shadow-xl w-96 p-2"
                            id="name"
                            name="name"
                            value={newUser.name}
                            type="text"
                            onChange={handleChange}
                            placeholder="Seu nome"
                        />
                    </div>
                    <div
                        className="flex flex-col flex-nowrap p-2 justify-items-center items-center"
                    >
                        <label
                            className="font-bold text-left w-full"
                            htmlFor="email">E-mail:</label>
                        <p
                            className="italic ml-4 text-left w-full"
                            id="email">Escolha um e-mail que consulte diariamente</p>
                        <input
                            className="rounded-xl shadow-xl w-96 p-2"
                            id="email"
                            name="email"
                            value={newUser.email}
                            type="text"
                            onChange={handleChange}
                            placeholder="user@user.com"
                        />
                    </div>
                    <div
                        className="flex flex-col flex-nowrap p-2 justify-items-center items-center w-full"
                    >
                        <label
                            className="font-bold text-left w-full"
                            htmlFor="aboutMe">Descrição:</label>
                        <textarea
                            className="text-left w-96 p-2
                            rounded-xl shadow-xl"
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
                        className="font-mono text-center text-sm p-2 h-10 rounded-full shadow-xl 
                        border-solid border-2 border-black m-4 enabled:hover:bg-green-500 disabled:opacity-75"
                        type="button"
                        disabled={btnDisable}
                        onClick={handleCLick}
                    >
                        Salvar
                    </button>
                </div>
            </section>
        </main>
    )
}

export default ProfileForm