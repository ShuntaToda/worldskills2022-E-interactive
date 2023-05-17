import React, { useEffect, useRef, useState } from "react";

export const Avatar = ({ playerPosition, setPlayerMoveLimit, movingDistance }) => {
  const player = useRef(null);
  useEffect(() => {
    if (player.current.offsetTop < movingDistance) {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, top: true }));
    } else {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, top: false }));
    }

    if (player.current.offsetLeft < movingDistance) {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, left: true }));
    } else {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, left: false }));
    }

    if (player.current.offsetRight < movingDistance) {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, right: true }));
    } else {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, right: false }));
    }

    if (player.current.offsetBottom < movingDistance) {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, bottom: true }));
    } else {
      setPlayerMoveLimit((prevLimit) => ({ ...prevLimit, bottom: false }));
    }
  }, [playerPosition]);
  return (
    <div id="avatar" ref={player} style={{ top: playerPosition.y, left: playerPosition.x }}>
      Avatar
    </div>
  );
};
