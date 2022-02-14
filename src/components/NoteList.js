import {Notes} from "./Notes";
import {AddNote} from "./AddNote";

export const NoteList = ({notes, handleNewText,del}) => {
    return (
        <div className="notes__list">
            {
                notes.map((note, i) => {
                    return <div key={i}>
                        <Notes
                            note={note}
                            del={del}
                        />
                    </div>
                })
            }
            <AddNote handleNewText={handleNewText}/>
        </div>
    )
}
