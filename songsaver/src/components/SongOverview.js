import React, { Component } from "react"

import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            songs: [
                { id: 1, song: "Song 1", artist: "Artist 1", genre: "Pop", rating: "5" },
                { id: 2, song: "Song 2", artist: "Artist 2", genre: "Jazz", rating: "4" },
                { id: 3, song: "Asong", artist: "Artist", genre: "Rock", rating: "1" },
                { id: 4, song: "Kever", artist: "Joeee", genre: "Pop", rating: "4" }
            ]
        }
        this.state.songs.sort((a, b) => (a.song < b.song) ? -1 : 1)
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
            ].sort((a, b) => (a.song < b.song) ? -1 : 1)
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