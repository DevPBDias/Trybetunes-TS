import { useNavigate } from "react-router-dom"
import Logo from "./Logo"

function ProfileCard({ data }: any) {
    const navigate = useNavigate()

    return (
        <main>
            <div>
                {
                    data.image === '' ? <Logo /> : <img src={data.image} alt={data.name} />
                }
                <button type="button" onClick={() => navigate('/profile/edit')}>Editar Perfil</button>
            </div>
            <div>
                <p>Nome:</p>
                {
                    data.name === '' ? 'Usuario' : <p>{data.name}</p>
                }
                <p>E-mail:</p>
                {
                    data.email === '' ? 'Email' : <p>{data.email}</p>
                }
                <p>Descrição:</p>
                {
                    data.description === '' ? '' : <p>{data.description}</p>
                }

            </div>
        </main>
    )
}

export default ProfileCard