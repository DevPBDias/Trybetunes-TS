import { useState } from "react"
import { searchAlbumsAPI } from "../services/searchAlbumsAPI";
import AlbumCard from "./AlbumCard";
import Forms from "./Forms";

type ISearchForm = {
    loadingForm: boolean
}

function SearchForm({ loadingForm }: ISearchForm) {
    const [disabled, setDisabled] = useState(true);
    const [loadingResult, setloadingResult] = useState(false);
    const [searchedName, setSearchedName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [albumsList, setAlbumsList]: any = useState();

    const handleChange = ({ target }: any): void => {
        setArtistName(target.value)
        target.value.length >= 2 ? setDisabled(false) : setDisabled(true)
    }

    const handleClick = async (): Promise<void> => {
        setSearchedName(artistName)
        const list = await searchAlbumsAPI(artistName)
        setAlbumsList(list);
        setloadingResult(true)
        setArtistName('')
    }

    return (
        <main
            className="font-mono flex flex-col justify-items-center items-center"
        >
            {
                loadingForm && (
                    <Forms
                        searchedName={artistName}
                        btnDisable={disabled}
                        inputHandle={handleChange}
                        btnHandle={handleClick}
                    />)
            }
            {
                loadingResult && (<p
                    className="font-mono text-2xl p-6 text-center "
                >Resultado de albuns de: {searchedName.toUpperCase()}</p>)
            }
            {
                albumsList?.length === 0 ? (<p>Nenhum álbum foi encontrado</p>) : (
                    <section
                        className="flex flex-row flex-wrap justify-items-center justify-around items-center"
                    >
                        {
                            albumsList?.map((albums: any) => (
                                <div
                                    className="border-solid border-2 border-green-500 w-56 h-80 m-2 rounded-xl shadow"
                                >
                                    <AlbumCard
                                        key={albums.collectionId}
                                        id={albums.collectionId}
                                        artistName={albums.artistName}
                                        collectionName={albums.collectionName}
                                        artworkUrl100={albums.artworkUrl100}
                                    />
                                </div>))
                        }
                    </section>
                )
            }
        </main >
    )
}

export default SearchForm