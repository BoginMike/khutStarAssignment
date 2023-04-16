import React from "react";
//import Users from "./components/Users";
import SongCard from "SongCard";
import stars from "star.png";
import songs from "./services/songs";

const Ratings = ({ data }) => {
    return (
        <div className="star">
        {songs.map(({ id, rating }) => (
          <SongCard key={id}
          rating={rating}
          />
        ))}
        if (rating = 1) {
          stars = {stars}
        }
        else if (rating = 2) {
          stars = {stars} + {stars}
        }
        else if (rating = 3) {
          stars = {stars} + {stars} + {stars}
        }
        else if (rating = 4) {
          stars = {stars} + {stars} + {stars} + {stars}
        }        
        else if (rating = 5) {
          stars = {stars} + {stars} + {stars} + {stars}
        }              
      </div>
    );
  };   


  export default Ratings.stars;