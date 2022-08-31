import React from "react";

const ListItem = ({ song, handleRemove }) => {
    return (
        <tr key={song.id}>
            <td className="list-item">{song.song}</td>
            <td className="list-item">{song.artist}</td>
            <td className="list-item">{song.genre}</td>
            <td className="list-item">{song.rating}</td>
            <td><button key={song.id} className="button-delete" onClick={() => handleRemove(song.id)}>Delete Song</button></td>
        </tr>
    )
}

export default ListItem;