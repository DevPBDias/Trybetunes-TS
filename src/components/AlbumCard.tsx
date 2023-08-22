type ArtistProps = {
    key: number
    artistName: string,
    collectionName: string,
    artworkUrl100: string,
}

function AlbumCard(props: ArtistProps) {
    const { artistName, collectionName, artworkUrl100 } = props

    return (
        <main>
            <p>Resultado de albuns de {artistName}:</p>
            <section>
                <img src={artworkUrl100} alt={collectionName} />
                <p>{collectionName}</p>
                <p>{artistName}</p>
            </section>
        </main>
    )
}

export default AlbumCard