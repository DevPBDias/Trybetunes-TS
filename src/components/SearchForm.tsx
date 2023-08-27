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
        <main>
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
                loadingResult && (<p>Resultado de albuns de: {searchedName.toUpperCase()}</p>)
            }
            {
                albumsList?.length === 0 ? (<p>Nenhum álbum foi encontrado</p>) : (
                    <section>
                        {
                            albumsList?.map((albums: any) => (
                                <div>
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