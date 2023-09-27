import React from "react";

const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p> {name} </p>
      {Object.values(description).map((item, index) => {
        return (
          <p key={index} className="tile">
            {item}
          </p>
        );
      })}
    </div>
  );
};
export default Tile;
