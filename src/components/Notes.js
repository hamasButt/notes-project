export const Notes = ({note, del}) => {


    const {text, dated, id} = note
    return (
        <div className={"note"}>
            <span>
                {text}
            </span>
            <div className={"footer"}>
                <small>{dated}</small>
                <button
                    onClick={() => del(id)}
                    className={"delete"}>X
                </button>
            </div>
        </div>
    )
}
