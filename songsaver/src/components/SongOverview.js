import React, { Component } from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            songs: []
        }
        this.state.songs.sort((a, b) => (a.song < b.song) ? -1 : 1)
    }

    addSong = (id, song, artist, genre, rating) => {
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

    handleRemove = (songId) => {
        const songs = this.state.songs.filter(item => item.id !== songId)
        this.setState({ songs: songs })
    }

    render() {
        return (
            <div>
                <SongForm addSong={this.addSong} />
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr className="song-header">
                            <th className="song-row__item">Song</th>
                            <th className="song-row__item">Artist</th>
                            <th className="song-row__item">Genre</th>
                            <th className="song-row__item">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.songs.map((song) => (
                            <SongList
                                key={song.id}
                                song={song}
                                handleRemove={this.handleRemove}
                            />
                        ))}
                    </tbody>
                </table>
            </div >
        )
    }
}

export default SongOverview;