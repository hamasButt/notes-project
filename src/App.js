import React from 'react'
import { NoteList } from "./components/NoteList";
const App = () => {

    const [notes, setNotes] = React.useState([
        {
            id: 213123,
            text: 'Walking',
            dated: dateBuilder()
        },
        {
            id: 1231123,
            text: 'this is my notes',
            dated: dateBuilder()
        },
        {
            id: 12312123,
            text: 'Groceries',
            dated: dateBuilder()

        },
    ])
    const handleNewText = (text) => {
        const newNote = {
            id: Math.floor(Math.random() * 123122412),
            text:text,
            dated: dateBuilder()
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }

    const del = (id) => {
        const newArr = notes.filter(note => note.id !== id)
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


const dateBuilder = () => {
    let d = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'june', 'July', 'August', 'September', 'Octuber', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;

}
