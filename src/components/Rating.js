import React from "react";
//import Users from "./components/Users";
//import SongCard from "./SongCard.js";
//import songs from "../services/songs.js";

const Ratings = ({ stars }) => {
    return (
        <div className="rating">
    
{[...Array(stars)].map((item,index)=>(
  <div class="star"></div>
))}
      

      </div>
    );
  };   


  export default Ratings;