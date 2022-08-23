import React from "react";

import ListItem from "./ListItem";

const SongList = ({ songs, handleRemove }) => {
    return (
        <div>
            <h1>SongList</h1>
            <ul>
                {songs.map((song) => (
                    <ListItem
                        key={song.id}
                        song={song}
                        handleRemove={handleRemove}
                    />
                ))}
            </ul>
        </div>
    )
}


export default SongList;