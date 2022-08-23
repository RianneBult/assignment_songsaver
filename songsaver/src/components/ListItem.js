import React from "react";

const ListItem = ({ song }) => {
    return (
        <li
            key={song.id}
            value={song}>
            <div>{song.song} {song.artist} {song.genre} {song.rating}
            </div>
        </li>
    )
}

export default ListItem;