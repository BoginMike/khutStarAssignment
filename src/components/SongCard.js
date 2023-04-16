import React from "react";
import PropTypes from "prop-types";
// import Ratings from "./Ratings"


const SongCard = ({ data }) => {
  return (
    
    <div className="song-card" key={data.id}>
      <img className="song-pic" src={data.thumb} alt={data.title} />
      <div className="song-title">{data.title}</div>
      <div className="song-artist">{data.artist}</div>
      <div className="song-rating">{data.rating}</div>
    </div>
  );

};

SongCard.propTypes = {
  data: PropTypes.shape({
    thumb: PropTypes.string,
    artist: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number
  })

}


export default SongCard;
