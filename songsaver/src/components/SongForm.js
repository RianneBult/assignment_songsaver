import { useState } from "react";

const SongForm = ({ addSong }) => {
    const [id, setId] = useState("")
    const [song, setSong] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Submitting ${song}`)
        addSong(id, song, artist, genre, rating)
        setId("")
        setSong("")
        setArtist("")
        setGenre("")
        setRating("")
    }

    return (
        <div>
            <h1>SongForm</h1>
            <form>

                <input
                    type="text"
                    name="song"
                    className="inputfield"
                    placeholder="Song"
                    value={song}
                    // onChange={(e) => setSong(e.target.value)}
                    onChange={(e) => setSong(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                ></input>

                <input
                    type="text"
                    name="artist"
                    className="inputfield"
                    placeholder="Artist"
                    value={artist}
                    // onChange={(e) => setArtist(e.target.value)}
                    onChange={(e) => setArtist(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                ></input>

                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option>Choose Genre</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Rock">Rock</option>
                </select>

                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option>Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button onClick={handleSubmit}>Add Song!</button>

            </form>
        </div>
    )
}


export default SongForm;