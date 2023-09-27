import React from "react";
import Tile from "../tile/Tile";

export const TileList = ({ array }) => {
  return (
    <div className="flex">
      {array.map(({ name, ...rest }, index) => {
        return <Tile key={index} name={name} description={rest} />;
      })}
    </div>
  );
};

//trying to figure out the ...rest bit to get the description.
//within the array are objects.
//for each object, name=name, rest=description
