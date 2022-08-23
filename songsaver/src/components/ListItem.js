import React from "react";

const ListItem = ({ song, handleRemove }) => {
    return (
        <li
            key={song.id}
            value={song}>
            <div>{song.song} {song.artist} {song.genre} {song.rating}
                <button key={song.id} onClick={() => handleRemove(song.id)}>Delete Song</button>
            </div>
        </li>
    )
}

export default ListItem;