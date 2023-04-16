import React, { Component } from "react";
//import Inbox from "./components/Inbox";
import Users from "./components/Users";
// import Ratings from "./components/Ratings"
// import ProfileCard from "./components/ProfileCard";

class App extends Component {
  render() {
    return(
      
    // this.state.users.map(u => <ProfileCard data={u} key={u.id} />);
    //  [... this.state.users.sort((a, b) => b.rating - a.rating)];
    //  [... this.state.users.sort ((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)]; 
      
      <div className="main">
        
        <div id="super-tunes">
           <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        </div>

        <Users />


      </div>
    );
  }
}

export default App;




