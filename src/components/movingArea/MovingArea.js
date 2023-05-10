import React from "react";
import { Avatar } from "./Avatar";

export const MovingArea = ({ playerPosition }) => {
  return (
    <div id="moving-area">
      <Avatar playerPosition={playerPosition}></Avatar>
    </div>
  );
};
