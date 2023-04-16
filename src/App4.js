import React, { Component } from "react";
import songs from './services/songs.js';
// import Rating from './components/Rating.js';
// import SongCard from './components/SongCard.js';

class App extends Component {
  state = {
    songs: []
  };

  componentDidMount() {
    songs().then(data => {
      this.setState({ songs: data });
    });
  }


  sortByTitle = () => {
    const sortByTitle = [...this.state.songs].sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1);
    this.setState({ songs: sortByTitle });
  };

  sortByRating = () => {
    const sortByRating = [...this.state.songs].sort((a, b) => b.rating - a.rating);
    this.setState({ songs: sortByRating });
  };

  render() {

    return (

        <div id="super-tunes">
           <h2 id="st-title">SuperTunes - Songs of the Week</h2>
           <div>
              <button className="title.st-btn" onClick={this.sortByTitle}>Sort by Title</button>
              <button className="rating.st-btn" onClick={this.sortByRating}>Sort by Rating</button>   
           </div> 
            
        </div> 
        {/* {SongCard.map(song => (

            <div className="song-card" key={songs.id}>
               <img src={song.thumb} alt={song.title} className="img.st-thumb"/>
               <div className="song-title">
                {song.title}  {song.artist} 
               </div> 
               <Rating stars={song.rating}/>
            </div>

          ))} */}


    );
  }
}

export default App;