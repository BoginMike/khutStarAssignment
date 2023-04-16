import React, { Component } from "react";
import songs from './services/songs.js';
import SongCard from './components/SongCard.js'

class App extends Component {
  state = {
    songsData: []
  };

  componentDidMount() {
    // songs().then(data => {
    //   this.setState({ songs: data });
    // });
   return this.setState( {songsData: songs} );
  }


  sortByTitle = () => {
    const sortByTitle = [...this.state.songsData].sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1);
    this.setState({ songs: sortByTitle });
  };

  sortByRating = () => {
    const sortByRating = [...this.state.songs].sort((a, b) => b.rating - a.rating);
    this.setState({ songs: sortByRating });
  };

  render() {

    return (
      <div className="song-list">
        <div id="super-tunes">
           <h2 id="st-title">SuperTunes - Songs of the Wee {this.state.songsData.length} </h2>
        </div> 

      <div>
      {this.state.songsData.map((item)=>{
        return(
          <SongCard data={item}/>
        )
      })}
      </div>
</div>


    );
  }
}

export default App;