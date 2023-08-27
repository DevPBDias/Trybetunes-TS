import { Link } from "react-router-dom"

type ArtistProps = {
    id: number
    artistName: string,
    collectionName: string,
    artworkUrl100: string,
}

function AlbumCard(props: ArtistProps) {
    const { artistName, collectionName, artworkUrl100, id } = props

    return (
        <Link to={`/album/${id}`}>
            <img src={artworkUrl100} alt={collectionName} />
            <p>{collectionName}</p>
            <p>{artistName}</p>
        </Link>
    )
}

export default AlbumCard