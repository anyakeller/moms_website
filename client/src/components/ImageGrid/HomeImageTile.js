import React from "react";

function HomeImageTile(props) {
  // return navbar

  return (
    <img
      className="home-img-tile"
      src={"./../images/" + props.file_name}
      key={props.id}
      alt={props.alt}
      style={{width:props.width}}
    />
  );
}

export default HomeImageTile;
