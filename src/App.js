import React from 'react'
import {NoteList} from "./components/NoteList";

const App = () => {
    const [notes, setNotes] = React.useState([
        {
            id: 0,
            text: 'this is my notes',
            dated: ' 10 / 2 / 2022'
        },
        {
            id: 32,
            text: 'this is my notes',
            dated: ' 10 / 2 / 2022'
        },
        {
            id: 45,
            text: 'this is my notes',
            dated: ' 10 / 2 / 2022'

        },
    ])
    const handleNewText = (text) => {
        const date = new Date()
        const newNote = {
            id: Math.floor(Math.random() * 10000),
            text,
            date: date.toLocaleDateString(),
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }

    const del = (id) => {
       const newArr =  notes.filter(note => note.id !== id)
        setNotes(newArr)
    }

    return (
        <div className="container">
            <NoteList
                notes={notes}
                del={del}
                handleNewText={handleNewText}
            />
        </div>
    );
}
export default App
