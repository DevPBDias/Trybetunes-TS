
type musicCardProps = {
    musicData: any[]
}

function MusicCard({ musicData }: musicCardProps) {
    const removeData = musicData?.filter((elem) => elem.wrapperType === "track")

    return (
        <div>
            {
                removeData?.length === 0 ? (<p>Nenhum álbum foi encontrado</p>) : (
                    <section
                        className="font-mono flex flex-col flex-wrap justify-items-center items-center w-full"

                    >
                        {
                            removeData?.map((music: any, key) => (
                                <div
                                    className="m-4 text-center flex flex-col flex-wrap justify-items-center items-center"
                                    key={key}>
                                    <p
                                        className="font-bold p-2"
                                    >{music.trackName}</p>
                                    <audio
                                        data-testid="audio-component" src={music.previewUrl} controls>
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
