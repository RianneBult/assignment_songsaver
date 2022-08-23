import React, { Component } from "react"

import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            songs: [
                { id: 1, song: "SONG 1", artist: "ARTIST 1", genre: "Pop", rating: "5" },
                { id: 2, song: "SONG 2", artist: "ARTIST 2", genre: "Jazz", rating: "4" },
                { id: 3, song: "ASONG", artist: "Artist", genre: "Rock", rating: "1" },
                { id: 4, song: "KEVER", artist: "Joeee", genre: "Pop", rating: "4" }
            ]
        }
    }

    addSong = (id, song, artist, genre, rating) => {
        // do something to change the state
        this.setState({
            songs: [
                ...this.state.songs,
                {
                    id: this.state.songs.length + 1,
                    song: song,
                    artist: artist,
                    genre: genre,
                    rating: rating,
                }
            ]
        })
    }

    render() {
        return (
            <div>
                <SongForm addSong={this.addSong} />
                <table style={{ width: "100%" }}>
                    <tr className="song-header">
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>
                </table>
                <SongList songs={this.state.songs} />
            </div>
        )
    }
}

export default SongOverview;