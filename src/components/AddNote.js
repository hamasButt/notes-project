import {useState} from 'react'

export const AddNote = ({handleNewText}) => {


    
    const [noteText, setNoteText] = useState('')
    const charLimit = 200

    const handleEvent = (e) => {
        if (charLimit - e.target.value.length >=0){
            setNoteText(e.target.value)
        }
    }

    const saveNote = () => {
        if (noteText.trim().length > 0) {
            handleNewText(noteText)
            setNoteText('')
        }
    }


    return (
        <div className={"note new__note"}>
            <textarea
                className={"textarea"}
                value={noteText}
                cols="8"
                rows="8"
                placeholder={"type to add a note"}
                onChange={(e) => handleEvent(e)}
            />
            <div className={"footer"}>
                <small>{charLimit - noteText.length} Remaining</small>
                <button
                    onClick={saveNote}
                    className={"save"}>Save
                </button>
            </div>
        </div>
    )
}
