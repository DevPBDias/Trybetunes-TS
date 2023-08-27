
type FormProps = {
    searchedName: string,
    btnDisable: boolean,
    inputHandle: React.ChangeEventHandler<HTMLInputElement> | undefined,
    btnHandle: React.MouseEventHandler<HTMLButtonElement> | undefined
}

function Forms(props: FormProps) {
    const { searchedName, btnDisable, inputHandle, btnHandle } = props;

    return (
        <form>
            <input
                type="text"
                value={searchedName}
                placeholder="Nome do artista"
                onChange={inputHandle}
            />
            <button
                disabled={btnDisable}
                type="button"
                onClick={btnHandle}
            >
                Procurar
            </button>
        </form>
    )
}

export default Forms