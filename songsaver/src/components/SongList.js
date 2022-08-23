import React from "react";

import ListItem from "./ListItem";

const SongList = ({ songs }) => {
    return (
        <div>
            <h1>SongList</h1>
            <ul>
                {songs.map((song) => (
                    <ListItem
                        key={song.id}
                        song={song}
                    />
                ))}
            </ul>
        </div>
    )
}


export default SongList;