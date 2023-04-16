import React, { Component } from "react";
import songs from "./services/songs";
//import SongCard from "./components/SongCard";


class App extends Component {
    state = {
        songs: []
      };
      titleSort = () => {
    
        this.state.songs.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1); 
        this.state.songs.map(u => <song-list data={u} key={u.id} />)
      }
      ratingSort = () => {
    
           this.state.songs.sort((a,b) => b.rating - a.rating);  }
    
      componentDidMount = async () => {
        const fetchSongs = await songs();
        this.setState({
          songs: fetchSongs});
        }
    

  
    render() {
    return(
      
   
      
    <div className="main">


 
      {/* {this.state.show ? this.state.users.map(u => <SongCard data={u} key={u.id} />) : this.state.users.map(u => <SongCard data={u} key={u.id} />) } */}


        <div id="super-tunes">
           <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        </div>
        <button class="Rst-btn" onClick={this.titleSort}>Sort by Title</button> 
        <button class="Tst-btn" onClick={this.ratingSort}>Sort by Rating</button>
 
         <div id="song-list">
         {/* {this.state.songs.map(u => <SongCard data={u} key={u.id} />)} */}
         <div class="song-card">
        <img src="https://i.scdn.co/image/ab67616d0000485133dcbaf383aad23af9a4b7b5" alt="vibe" class="st-thumb"></img>  
        <div class="song-title">"Vibe" "by" "Cookie Kawaii"</div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>    
          <div class="star"></div>      
      </div>
      </div>
        <div class="song-card">
        <img src="https://i.scdn.co/image/ab67616d000048517e4135635fa0e393b31dc407" alt="powfu" class="st-thumb"></img>
        <div class="song-title">"death bed(feat. beabadoobee) by Powfu"</div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        </div>
        <div class="song-card"> 
          <img src="https://i.scdn.co/image/ab67616d00004851aea0d98794e91056c608e069" alt="powfu" class="st-thumb"></img>
          <div class="song-title">"Moral of the Story by Ashe"</div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        </div>
        <div class="song-card"> 
        <img src="https://i.scdn.co/image/9bb7e673f1d5605709f576ccfbdfd765d8b58c6a" alt="ashe" class="st-thumb"></img>
        <div class="song-title">" My Truck by Berland"</div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
        </div>
        </div>
        <div class="song-card"> 
        <img src="https://i.scdn.co/image/d506fd8f64a0cf745912bb15fecc80a3c971ca9d" alt="myTruck" class="st-thumb"></img>
        <div class="song-title">"Pura Pura Lupa by Mahen"</div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        </div>
        <div class="song-card"> 
        <img src="https://i.scdn.co/image/ab67616d0000485105c50cf7a461aa654fe9b15a" alt="pura pura" class="st-thumb"></img>
        <div class="song-title">"Whats POPPIN by Jack Harlow"</div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        </div>
        <div class="song-card"> 
        <img src="https://i.scdn.co/image/ab67616d00004851626c524e10b50daae74879f9" alt="what's popping" class="st-thumb"></img>
        <div class="song-title">"Apollo by Smoove'L" </div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>

        </div>
        </div>
        <div class="song-card"> 
        <img src="https://i.scdn.co/image/f4f02683810ea9cd03330b0db8ab6a530444740b" alt="appollo by" class="st-thumb"></img>
        <div class="song-title">"Carnaval Chegando by Rennan Da Penha" </div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        </div>
        <div class="song-card"> 
        <img src="https://i.scdn.co/image/a9284cea0242cedb2fdf9de7711e8041f1b0f484" alt="appollo by" class="st-thumb"></img>
        <div class="song-title">"Psycho! by MASE" </div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        </div>

        <div class="song-card">
        <img src="https://i.scdn.co/image/445de0881dd3694a836dcb0d9882f45a4b3bacb1" alt="carnivale llegando" class="st-thumb"></img> 
        <div class="song-title">"Any Song by Zico"</div>
        <div class="rating">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>

        </div>
        </div>
              
                </div>
</div>
);
}
}

       



export default App;



