
//import React, { Component } from "react";
//import songs from "../services/songs";
//import SongCard from "./SongCard";


//const handleClick = evt =>  {this.state.users.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)};

// class LoggingButton extends Component {
 // class Notification extends Component {
    // state = {
    //   show: true
    // };
    // toggleDisplay = () =>
    //   this.setState({
    //     show: !this.state.show
    //   });
  //   render() {
  //     return (
  //       <div className="notification-widget">
  //         <div className="toggle-btn" onClick={this.toggleDisplay}>
  //           N
  //         </div>
  //         {this.state.show ? <NotificationText text={this.props.text} /> : null}
  //       </div>
  //     );
  //   }
  // }
// class songs extends Component {
//   state = {
//     users: [],
//     show: true
//   };
//   titleSort = () => {

//    this.setState({
//     show: !this.state.show
//     });

//      // this.state.show ? this.state.users.sort((a,b) => b.rating - a.rating) : this.state.users.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1);
//     this.state.users.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1); }
//   ratingSort = () => {

//       this.setState({
//        show: !this.state.show
//        });
   
//        // this.state.show ? this.state.users.sort((a,b) => b.rating - a.rating) : this.state.users.sort((a,b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1); 

//        this.state.users.sort((a,b) => b.rating - a.rating);  }

//   componentDidMount = async () => {
//     const fetchUsers = await songs();
//     this.setState({
//       users: fetchUsers});
//     }


//   render() {
//   return (
//  <div className="song-list">
//    <div className="Tst-btn" onClick={this.titleSort}>
//       <button class="Tst-btn">Sort by Title</button>
//   </div> 

//   <div className="Rst-btn" onClick={this.ratingSort}>
//      <button class="Rst-btn">Sort by Rating</button>
//   </div> 
//        {this.state.show ? this.state.users.map(u => <SongCard data={u} key={u.id} />) : this.state.users.map(u => <SongCard data={u} key={u.id} />) }
//  </div>
//  );
    
//   }  
// } 


//export default App
