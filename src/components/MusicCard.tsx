
type musicCardProps = {
    musicData: any[]
}

function MusicCard({ musicData }: musicCardProps) {
    const removeData = musicData?.filter((elem) => elem.wrapperType === "track")

    return (
        <div>
            {
                removeData?.length === 0 ? (<p>Nenhum álbum foi encontrado</p>) : (
                    <section>
                        {
                            removeData?.map((music: any, key) => (
                                <div key={key}>
                                    <p>{music.trackName}</p>
                                    <audio data-testid="audio-component" src={music.previewUrl} controls>
                                        <track kind="captions" />
                                        O seu navegador não suporta o elemento <code>audio</code>.
                                    </audio>
                                </div>
                            ))
                        }
                    </section>
                )
            }
        </div>
    )
}

export default MusicCard
