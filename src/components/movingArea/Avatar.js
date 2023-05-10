import React, { useEffect, useState } from "react";

export const Avatar = ({ playerPosition }) => {
  return (
    <div id="avatar" style={{ top: playerPosition.y, left: playerPosition.x }}>
      Avatar
    </div>
  );
};
