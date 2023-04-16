import React, { Component } from "react";
import songs from "./services/songs";
import SongCard from "./components/SongCard";


class App extends Component {
    state = {
        songs: [],
        show: true 
      };


      titleSort = () => {
        this.setState({
          show: !this.state.show
          });
        this.state.songs.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1); 

      }
      ratingSort = () => {
        this.setState({
          show: !this.state.show
          });
           this.state.songs.sort((a,b) => b.rating - a.rating);  }
    
      componentDidMount = async () => {
        const fetchSongs = await songs();
        this.setState({
          songs: fetchSongs});

        }

  
    render() {
    return(
      
   
      
    <div className="main">
        {/* {this.state.songs.map(u => <SongCard data={u} key={u.id}   />)}  */}

        <div id="super-tunes">
           <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        </div>
        <button className="Tst-btn" onClick={this.titleSort}>Sort by Title</button>
        <button className="Rst-btn" onClick={this.ratingSort}>Sort by Rating</button> 
        <div class="song-card">
        <img src={this.state.songs.map(u => <SongCard data={u.songPic} key={u.id} />)} alt="powfu" class="st-thumb"></img>
        <div class="song-title">"death bed(feat. beabadoobee) by Powfu"</div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        </div>

  
 </div>
 
        
              
       

);
}
}

       



export default App;



