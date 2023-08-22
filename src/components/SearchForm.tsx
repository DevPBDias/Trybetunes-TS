import { useState } from "react"

function SearchForm() {
    const [disabled, setDisabled] = useState(true);
    const [artistName, setArtistName] = useState('');

    const handleChange = ({ target }: any) => {
        setArtistName(target.value)
        target.value.length >= 2 ? setDisabled(false) : setDisabled(true)
    }


    return (
        <form>
            <input
                type="text"
                value={artistName}
                placeholder="Nome do artista"
                onChange={handleChange}
            />
            <button
                disabled={disabled}
                type="button"
            >
                Procurar
            </button>
        </form>
    )
}

export default SearchForm