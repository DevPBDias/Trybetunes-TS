import { useNavigate } from "react-router-dom"
import userIcon from "../assets/userIcon.png"
import UserImage from "./UserImage"
import UserText from "./UserText"

function ProfileCard({ data }: any) {
    const navigate = useNavigate()

    return (
        <main
            className="flex flex-col justify-items-center items-center font-mono"
        >
            <section
                className="bg-slate-400 m-10 rounded-xl shadow-xl text-gray-950"
            >
                <div
                    className="flex flex-row flex-nowrap p-2 justify-items-center items-center justify-around"
                >
                    {
                        data.image === '' ?
                            <UserImage image={userIcon} nameImg="userIcon" />
                            : <UserImage image={data.image} nameImg={data.name} />
                    }
                    <button
                        className="font-mono text-center text-sm p-2 h-10 ml-20 bg-green-500  rounded-full shadow-xl 
                        border-solid border-2 border-black"
                        type="button"
                        onClick={() => navigate('/profile/edit')}
                    >
                        Editar Perfil
                    </button>
                </div>
                <div
                    className="flex flex-col flex-nowrap p-10 justify-items-center items-center"
                >
                    <div
                        className="flex text-left flex-col flex-nowrap p-2 justify-items-center items-center"

                    >
                        <p
                            className="font-bold text-left w-96"
                        >Nome:</p>
                        {
                            data.name === '' ? <UserText text='Seu nome' /> : <UserText text={data.name} />
                        }
                    </div>
                    <div
                        className="flex text-left flex-col flex-nowrap p-2 justify-items-center items-center"
                    >
                        <p
                            className="font-bold w-96"

                        >E-mail:</p>
                        {
                            data.email === '' ? <UserText text='Seu e-mail' /> : <UserText text={data.email} />
                        }
                    </div>
                    <div
                        className="flex text-left flex-col flex-nowrap p-2 justify-items-center items-center"

                    >
                        <p
                            className="font-bold text-left w-96"

                        >Descrição:</p>
                        {
                            data.description === '' ? <UserText text='Fale um pouco sobre você' /> : <UserText text={data.description} />
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProfileCard