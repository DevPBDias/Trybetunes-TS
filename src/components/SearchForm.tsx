import { useState } from "react"
import { searchAlbumsAPI } from "../services/searchAlbumsAPI";
import Loading from "./Loading";
import AlbumCard from "./AlbumCard";

function SearchForm() {
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [artistName, setArtistName] = useState('');
    const [albumsList, setAlbumsList]: any = useState();

    const handleChange = ({ target }: any) => {
        setArtistName(target.value)
        target.value.length >= 2 ? setDisabled(false) : setDisabled(true)
    }

    const handleClick = async () => {
        setArtistName('')
        setLoading(true)
        const list = await searchAlbumsAPI(artistName)
        setAlbumsList(list);
        setLoading(false)
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
                onClick={handleClick}
            >
                Procurar
            </button>
            {
                loading ? (<Loading />) : (
                    albumsList && albumsList.map((albums: any) => (
                        <AlbumCard
                            key={albums.collectionId}
                            artistName={albums.artistName}
                            collectionName={albums.collectionName}
                            artworkUrl100={albums.artworkUrl100}
                        />
                    )
                    ))
            }
        </form>
    )
}

export default SearchForm