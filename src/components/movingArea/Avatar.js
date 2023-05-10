import React, { useEffect, useState } from "react";

export const Avatar = () => {
  const [position, setPosition] = useState({
    top: 100,
    left: 300,
  });

  return (
    <div id="avatar" style={{ top: position.top, left: position.left }}>
      Avatar
    </div>
  );
};
