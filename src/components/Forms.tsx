
type FormProps = {
    searchedName: string,
    btnDisable: boolean,
    inputHandle: React.ChangeEventHandler<HTMLInputElement> | undefined,
    btnHandle: React.MouseEventHandler<HTMLButtonElement> | undefined
}

function Forms(props: FormProps) {
    const { searchedName, btnDisable, inputHandle, btnHandle } = props;

    return (
        <form
            className="flex justify-items-center items-center"
        >
            <input
                className="font-mono text-left text-sm p-2 m-4 w-96 bg-gray-200 rounded-lg shadow-lg"
                type="text"
                value={searchedName}
                placeholder="Nome do artista"
                onChange={inputHandle}
            />
            <button
                className="font-mono text-center text-sm m-4 px-8 py-2 bg-green-500  rounded-full shadow-lg disabled:bg-slate-500"
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